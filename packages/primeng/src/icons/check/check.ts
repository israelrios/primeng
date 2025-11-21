import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="check"]',
    standalone: true,
    template: ` <svg:path d="M1 6 L5 10 L13 1" fill="none" stroke="#1A73E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /> `
})
export class CheckIcon extends BaseIcon {
    viewBox = '0 0 14 11';
}
