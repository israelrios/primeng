import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="minus"]',
    standalone: true,
    template: `<i class="fas fa-minus"></i>`
})
export class MinusIcon extends BaseIcon {}
