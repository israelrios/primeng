import { Signal } from '@angular/core';

export interface MenuItem {
    id: number;
    descricao: string;
    url: string | null;
    filhos: MenuItem[] | null;
    icon?: string;
}

/**
 * An abstract provider class for menu items.
 * The consuming application must provide a service that extends this class.
 */
export abstract class MenuProvider {
    /** Returns a signal of the menu items. */
    abstract readonly menu: Signal<MenuItem[] | undefined>;
}
