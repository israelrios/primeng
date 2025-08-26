import { Signal } from '@angular/core';

export interface TemplateMenuItem {
    id: number;
    descricao: string;
    url: string | null;
    filhos: TemplateMenuItem[] | null;
    icon?: string;
}

/**
 * An abstract provider class for menu items.
 * The consuming application must provide a service that extends this class.
 */
export abstract class MenuProvider {
    /** Returns a signal of the menu items. */
    abstract readonly menu: Signal<TemplateMenuItem[] | undefined>;
}
