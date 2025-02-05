import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'MinusIcon',
    standalone: true,
    template: `<i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-minus'"></i>`
})
export class MinusIcon extends BaseIcon {}
