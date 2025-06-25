import { Params } from '@angular/router';

export interface Breadcrumb {
    label: string;
    clickable: boolean;
    route: string;
    fragment?: string;
    queryParams?: Params;
}
