import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="minus"]',
    standalone: true,
    template: ` <svg:path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z" fill="currentColor" /> `
})
export class MinusIcon extends BaseIcon {
    viewBox = '0 0 448 512';
}
