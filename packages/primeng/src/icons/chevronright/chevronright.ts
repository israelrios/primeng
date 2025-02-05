import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'ChevronRightIcon',
    standalone: true,
    template: `<i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-chevron-right'"></i>`
})
export class ChevronRightIcon extends BaseIcon {}
