import { Component, computed, effect, inject, input } from '@angular/core';
import { LocationStrategy, NgClass } from '@angular/common';
import { MenuItem } from '../menu.model';
import { SideMenuComponent } from '../side-menu.component';
import { Router } from '@angular/router';

// noinspection CssUnknownProperty
@Component({
    selector: '[s-menu-item]',
    imports: [NgClass],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
    host: {
        '[class.active]': 'opened',
        '[class.side-menu]': 'hasFilhos()',
        '[class.search-active]': 'searching()',
        '[style.--indent-level]': 'indentLevel'
    }
})
export class MenuItemComponent {
    readonly menu = input.required<MenuItem>();

    private readonly router = inject(Router);
    private readonly locationStrategy = inject(LocationStrategy);
    protected readonly parentItem = inject(MenuItemComponent, { optional: true, skipSelf: true });
    protected readonly sideMenu = inject(SideMenuComponent);

    opened = false;

    hasFilhos = computed(() => !!this.menu().filhos?.length);

    searching = this.sideMenu.searching;

    indentLevel = 1;

    constructor() {
        let level = 1;
        let parent = this.parentItem;
        while (parent) {
            level++;
            parent = parent.parentItem;
        }
        this.indentLevel = level;

        effect(() => {
            this.opened = this.searching() && !!this.menu().filhos?.length;
        });
    }

    hidden = computed(() => {
        const activeMenu = this.sideMenu.activeMenu();
        return !this.sideMenu.searching() && activeMenu !== this && activeMenu !== this.parentItem;
    });

    href = computed(() => {
        const url = this.menu().url;
        if (!url) {
            return '#';
        }
        if (url.startsWith('http')) {
            return url;
        }
        const urlTree = this.router.createUrlTree([url]);
        return this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(urlTree));
    });

    onClick(link: HTMLAnchorElement, event: MouseEvent) {
        if (this.hasFilhos()) {
            this.clickSideMenu(link);
            return false; // false para cancelar o evento
        }
        const url = this.menu().url;
        if (!url) {
            return false;
        }
        // baseado em código do [routerLink]
        if (url.startsWith('http') || event.button !== 0 || event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
            return true;
        }
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigateByUrl(url);
        return false;
    }

    clickSideMenu(element: HTMLAnchorElement): void {
        // Fecha Side Menu caso esteja aberto
        this.opened = !this.opened;

        if (this.sideMenu.activeMenu() === this) {
            this.sideMenu.activeMenu.set(this.parentItem);
            element.focus();
            return;
        } else {
            this.sideMenu.activeMenu.set(this);
        }

        element.focus();
    }

    protected readonly open = open;
}
