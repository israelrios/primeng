import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="calendar"]',
    standalone: true,
    template: `<i class="fas fa-calendar-alt"></i>`
})
export class CalendarIcon extends BaseIcon {}
