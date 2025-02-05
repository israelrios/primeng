import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'AngleDoubleRightIcon',
    standalone: true,
    template: `<i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-angle-double-right'"></i>`
})
export class AngleDoubleRightIcon extends BaseIcon {}
