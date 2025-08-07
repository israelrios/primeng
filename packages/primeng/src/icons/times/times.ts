import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="times"]',
    standalone: true,
    template: ` <i class="fas fa-times"></i> `
})
export class TimesIcon extends BaseIcon {}
