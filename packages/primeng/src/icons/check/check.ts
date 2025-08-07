import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="check"]',
    standalone: true,
    template: `<i class="fas fa-check"></i>`
})
export class CheckIcon extends BaseIcon {}
