import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'AngleDoubleLeftIcon',
    standalone: true,
    template: `<i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-angle-double-left'"></i>`
})
export class AngleDoubleLeftIcon extends BaseIcon {}
