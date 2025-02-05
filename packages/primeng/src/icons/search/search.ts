import { Component } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: 'SearchIcon',
    standalone: true,
    template: `<i [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames() + 'fas fa-search'"></i>`
})
export class SearchIcon extends BaseIcon {
    pathId: string;

    ngOnInit() {
        this.pathId = 'url(#' + uuid() + ')';
    }
}
