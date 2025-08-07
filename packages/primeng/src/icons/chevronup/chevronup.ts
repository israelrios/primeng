import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-up"]',
    standalone: true,
    template: `<i class="fas fa-angle-up"></i>`
})
export class ChevronUpIcon extends BaseIcon {}
