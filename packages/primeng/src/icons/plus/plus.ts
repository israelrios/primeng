import { Component } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="plus"]',
    standalone: true,
    template: `
        <svg:path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z" fill="currentColor" />
    `
})
export class PlusIcon extends BaseIcon {
    pathId: string;

    viewBox = '0 0 384 512';

    ngOnInit() {
        super.ngOnInit();
        this.pathId = 'url(#' + uuid() + ')';
    }
}
