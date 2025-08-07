import { Component } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="trash"]',
    standalone: true,
    template: `<i class="fas fa-trash-alt"></i>`
})
export class TrashIcon extends BaseIcon {
    pathId: string;

    ngOnInit() {
        super.ngOnInit();
        this.pathId = 'url(#' + uuid() + ')';
    }
}
