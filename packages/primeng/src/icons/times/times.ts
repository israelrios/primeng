import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'TimesIcon',
    standalone: true,
    template: ` <i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-times'"></i> `
})
export class TimesIcon extends BaseIcon {}
