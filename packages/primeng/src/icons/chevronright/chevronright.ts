import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-right"]',
    standalone: true,
    template: `<i class="fas fa-chevron-right"></i>`
})
export class ChevronRightIcon extends BaseIcon {}
