import { Component } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="search"]',
    standalone: true,
    template: `<i class="fas fa-search"></i>`
})
export class SearchIcon extends BaseIcon {
    pathId: string;

    ngOnInit() {
        super.ngOnInit();
        this.pathId = 'url(#' + uuid() + ')';
    }
}
