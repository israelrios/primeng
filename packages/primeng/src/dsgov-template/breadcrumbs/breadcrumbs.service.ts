import { inject, Injectable } from '@angular/core';

import { map, shareReplay } from 'rxjs';

import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.model';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbsService {
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);

    readonly breadcrumbs$ = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.onEvent()),
        shareReplay()
    );

    private onEvent() {
        return this.parseRoute(this.activatedRoute);
    }

    private parseRoute(activatedRoute: ActivatedRoute): Breadcrumb[] {
        const breadcrumbs: Breadcrumb[] = [];
        this.createBreadcrumbs(activatedRoute, '', breadcrumbs);
        return breadcrumbs;
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string, breadcrumbs: Breadcrumb[]): Breadcrumb[] {
        const children: ActivatedRoute[] = route.children;

        for (const child of children) {
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            const routeUrl: string = child.snapshot.url.join('');

            if (routeUrl !== '') {
                url += `/${routeUrl}`;
            }

            const label = child.snapshot.title;

            if (label) {
                // add breadcrumb
                const breadcrumb: Breadcrumb = {
                    label: label,
                    clickable: !!child.snapshot.component,
                    route: url,
                    fragment: child.snapshot.fragment ?? undefined,
                    queryParams: child.snapshot.queryParams
                };

                breadcrumbs.push(breadcrumb);
            }

            return this.createBreadcrumbs(child, url, breadcrumbs);
        }

        return breadcrumbs;
    }
}
