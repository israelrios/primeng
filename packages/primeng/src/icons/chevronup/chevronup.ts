import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-up"]',
    standalone: true,
    template: ` <svg:path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="currentColor" /> `
})
export class ChevronUpIcon extends BaseIcon {
    viewBox = '0 0 448 512';
}
