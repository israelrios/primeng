import { Component, HostListener, inject, ViewEncapsulation } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { NgOptimizedImage } from '@angular/common';
import { SideMenuComponent } from '../menu/side-menu.component';
import { TEMPLATE_CONFIG } from '../template.config';

@Component({
    selector: 's-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    imports: [NgOptimizedImage, SideMenuComponent],
    encapsulation: ViewEncapsulation.None
})
export class SideNavComponent {
    private readonly navService = inject(SideNavService);
    readonly templateConfig = inject(TEMPLATE_CONFIG);

    readonly showSideNav = this.navService.showNav;

    onSidebarClose() {
        this.navService.showNav.set(false);
    }

    @HostListener('document:keydown.escape')
    handleEscapeKey() {
        if (this.navService.showNav()) {
            this.onSidebarClose();
        }
    }
}
