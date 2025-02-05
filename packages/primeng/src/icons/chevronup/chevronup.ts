import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'ChevronUpIcon',
    standalone: true,
    template: `<i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-angle-up'"></i>`
})
export class ChevronUpIcon extends BaseIcon {}
