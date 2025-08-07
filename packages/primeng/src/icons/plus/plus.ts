import { Component } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="plus"]',
    standalone: true,
    template: `<i class="fas fa-plus"></i>`
})
export class PlusIcon extends BaseIcon {
    pathId: string;

    ngOnInit() {
        super.ngOnInit();
        this.pathId = 'url(#' + uuid() + ')';
    }
}
