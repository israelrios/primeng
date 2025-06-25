import { Component, inject, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbsService } from './breadcrumbs.service';
import { AsyncPipe } from '@angular/common';
import { TEMPLATE_CONFIG } from '../template.config';

type ItemType = 'LINK' | 'REDUCE' | 'LAST' | 'NONE';

@Component({
    selector: 's-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    imports: [RouterLink, AsyncPipe],
    host: { class: 'br-breadcrumb' }
})
export class BreadcrumbsComponent implements OnInit {
    private readonly templateConfig = inject(TEMPLATE_CONFIG);

    readonly homeUrl = input<string>(this.templateConfig.homeUrl);
    readonly homeName = input<string>('Início');

    private readonly breadcrumbsService = inject(BreadcrumbsService);

    breadcrumbs$ = this.breadcrumbsService.breadcrumbs$;

    showHidenItems = false;

    private _breadcrumbs: Breadcrumb[] = [];
    private _hidenIndex: number[] = [];
    private _maxItems = 0;

    get hidenIndex(): number[] {
        return this._hidenIndex;
    }

    get maxItems(): number {
        return this._maxItems;
    }

    @Input() set maxItems(maxItems: number) {
        this._maxItems = maxItems;
        this.syncHidenIndexes();
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
        if (last) {
            return 'LAST';
        }
        if (this.showHidenItems) {
            return 'LINK';
        }
        switch (this.hidenIndex.indexOf(index)) {
            case -1:
                return 'LINK';

            case 0:
                return 'REDUCE';

            default:
                return 'NONE';
        }
    }

    showCompletePath() {
        this.showHidenItems = true;
    }

    private syncHidenIndexes() {
        this._hidenIndex = [];
        if (this.maxItems && this._breadcrumbs.length) {
            let needExtra = false;
            let needed = this.maxItems / 2;
            if (this.maxItems % 2 !== 0) {
                needed = Math.floor(needed);
                needExtra = true;
            }

            this._hidenIndex = BreadcrumbsComponent.computeHidenIndexes(this._breadcrumbs.length, needed, needExtra);
        }
        this.showHidenItems = this._hidenIndex.length === 0;
    }

    ngOnInit(): void {
        this.breadcrumbs$.subscribe((breadcrumbs) => {
            this._breadcrumbs = breadcrumbs;
            this.syncHidenIndexes();
        });
    }
}
