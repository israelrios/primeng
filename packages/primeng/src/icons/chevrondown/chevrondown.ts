import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-down"]',
    standalone: true,
    template: `<i class="fas fa-angle-down"></i>`
})
export class ChevronDownIcon extends BaseIcon {}
