import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-left"]',
    standalone: true,
    template: `<i class="fas fa-chevron-left"></i>`
})
export class ChevronLeftIcon extends BaseIcon {}
