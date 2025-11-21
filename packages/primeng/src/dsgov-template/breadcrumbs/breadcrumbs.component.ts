import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbsService } from './breadcrumbs.service';
import { TEMPLATE_CONFIG } from '../template.config';
import { toSignal } from '@angular/core/rxjs-interop';

type ItemType = 'LINK' | 'REDUCE' | 'LAST' | 'NONE';

@Component({
    selector: 's-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    imports: [RouterLink],
    host: { class: 'br-breadcrumb' },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
    private readonly templateConfig = inject(TEMPLATE_CONFIG);
    private readonly router = inject(Router);

    readonly homeUrl = input<string>(this.templateConfig.homeUrl);
    readonly homeName = input<string>('Início');
    readonly maxItems = input<number>();

    private readonly breadcrumbsService = inject(BreadcrumbsService);

    readonly breadcrumbs = toSignal(this.breadcrumbsService.breadcrumbs$, { initialValue: [] as Breadcrumb[] });

    readonly showHidenItems = signal(true);
    readonly hidenIndex = computed(() => {
        const max = this.maxItems();
        const breadcrumbs = this.breadcrumbs();

        if (!max || !breadcrumbs.length) {
            return [];
        }

        const half = max / 2;
        const needExtra = max % 2 !== 0;
        const needed = needExtra ? Math.floor(half) : half;

        return BreadcrumbsComponent.computeHidenIndexes(breadcrumbs.length, needed, needExtra);
    });

    constructor() {
        effect(() => {
            const hidden = this.hidenIndex();
            this.showHidenItems.set(hidden.length === 0);
        });
    }

    static computeHidenIndexes(max: number, needed: number, neededExtra: boolean): number[] {
        const indexes: number[] = [];
        const extra = neededExtra ? 1 : 2;
        for (let index = 0; index < max; index++) {
            if (index + extra <= needed) {
                continue;
            }
            if (max - index <= needed) {
                continue;
            }
            indexes.push(index);
        }
        return indexes;
    }

    showItem(index: number, last: boolean): ItemType {
        const showHidenItems = this.showHidenItems();
        const hidenIndex = this.hidenIndex();

        if (last) {
            return 'LAST';
        }
        if (showHidenItems) {
            return 'LINK';
        }
        switch (hidenIndex.indexOf(index)) {
            case -1:
                return 'LINK';

            case 0:
                return 'REDUCE';

            default:
                return 'NONE';
        }
    }

    showCompletePath() {
        this.showHidenItems.set(true);
    }

    onHomeClick(event: MouseEvent) {
        // Let the browser handle new tab/window gestures
        if (event.ctrlKey || event.shiftKey) {
            return;
        }

        const url = this.homeUrl();

        if (!url || this.isAbsoluteUrl(url) || !this.isValidRoute(url)) {
            return;
        }

        event.preventDefault();
        this.router.navigateByUrl(this.normalizeRelativeUrl(url)).then(() => {});
    }

    private isAbsoluteUrl(url: string): boolean {
        return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url);
    }

    private normalizeRelativeUrl(url: string): string {
        return url.startsWith('/') ? url : `/${url}`;
    }

    private isValidRoute(url: string): boolean {
        const segments = this.normalizeRelativeUrl(url).split('/');

        if (segments.length > 1 && segments.at(-1) === '') {
            segments.pop();
        }

        if (segments.length > 1 && segments.at(0) === '') {
            segments.shift();
        }

        return this.hasMatchingConfig(segments, this.router.config);
    }

    private hasMatchingConfig(segments: string[], routes: Route[]): boolean {
        if (!routes.length || !segments.length) {
            return false;
        }

        const [current, ...rest] = segments;

        for (const route of routes) {
            if (!this.doesRouteMatchSegment(route, current)) {
                continue;
            }

            if (rest.length === 0) {
                return true;
            }

            if (route.children?.length && this.hasMatchingConfig(rest, route.children)) {
                return true;
            }

            if (route.loadChildren) {
                return true;
            }
        }

        return false;
    }

    private doesRouteMatchSegment(route: Route, segment: string): boolean {
        if (route.path === undefined) {
            return false;
        }

        if (route.path === '**') {
            return true;
        }

        if (route.path === '' || route.path === '/') {
            return true;
        }

        if (route.path.startsWith(':')) {
            return segment.length > 0;
        }

        return route.path === segment;
    }
}
