import { Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TEMPLATE_CONFIG } from '../template.config';
import { MenuService } from './menu.service';
import { MenuItem } from './menu.model';
import { SideNavService } from '../side-nav.service';
import { removeAccents } from '@primeuix/utils';

@Component({
    selector: 's-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss',
    imports: [MenuItemComponent]
})
export class SideMenuComponent {
    protected readonly menuService = inject(MenuService);
    protected readonly templateConfig = inject(TEMPLATE_CONFIG);
    private readonly navigationService = inject(SideNavService);
    readonly menuItems = this.menuService.menu;
    readonly searchTerm = signal('');

    readonly searching = computed(() => this.searchTerm().length > 0);

    readonly filteredMenuItems = computed(() => {
        const term = removeAccents(this.searchTerm()).toLowerCase();
        const menuItems = this.menuItems();
        if (!term || !menuItems) {
            return menuItems;
        }
        return this.filterItems(menuItems, term);
    });

    activeMenu = signal<MenuItemComponent | null>(null);

    searchInput = viewChild.required<ElementRef<HTMLInputElement>>('search');

    constructor() {
        effect(() => {
            if (this.navigationService.showNav()) {
                this.searchInput().nativeElement?.focus();
            }
        });
        effect(() => {
            if (!this.searching()) {
                this.activeMenu.set(null);
            }
        });
    }

    private filterItems(items: MenuItem[], term: string): MenuItem[] {
        return items
            .map((item) => {
                const children = item.filhos ? this.filterItems(item.filhos, term) : undefined;
                if (children?.length || (!item.filhos?.length && removeAccents(item.descricao).toLowerCase().includes(term))) {
                    return <MenuItem>{ ...item, filhos: children };
                }
                return null;
            })
            .filter((item): item is MenuItem => !!item);
    }
}
