import { Component } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="search"]',
    standalone: true,
    template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            fill="currentColor"
        />
    `
})
export class SearchIcon extends BaseIcon {
    pathId: string;

    viewBox = '0 0 512 512';

    ngOnInit() {
        super.ngOnInit();
        this.pathId = 'url(#' + uuid() + ')';
    }
}
