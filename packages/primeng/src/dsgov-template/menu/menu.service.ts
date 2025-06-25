import { computed, inject, Injectable } from '@angular/core';
import { MenuProvider } from './menu.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private readonly menuProvider = inject(MenuProvider, { optional: true });

    readonly menu = computed(() => this.menuProvider?.menu());
}
