import { Component, computed, ElementRef, inject, input, viewChild } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { NgOptimizedImage } from '@angular/common';
import { TEMPLATE_CONFIG, UserInfoProvider } from '../template.config';
import { toSignal } from '@angular/core/rxjs-interop';

const LOCALE = 'pt-BR';

@Component({
    selector: 's-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [NgOptimizedImage],
    host: {
        class: 'br-header'
    }
})
export class HeaderComponent {
    private readonly navService = inject(SideNavService);
    readonly templateConfig = inject(TEMPLATE_CONFIG);
    private readonly userInfoProvider = inject(UserInfoProvider);

    showTooltip = false;
    tooltipTop = 0;
    tooltipRight = 0;
    private hideUserInfoTimeout = 0;
    toggleFunctions = false;

    readonly showSearch = input(false);
    readonly pageTitle = input.required<string>();

    readonly avatarElement = viewChild.required<ElementRef<HTMLElement>>('avatar');

    readonly user = toSignal(this.userInfoProvider.getUser());

    readonly initials = computed(() => {
        const name = this.user()?.name();
        if (!name) return undefined;

        const names = name.trim().split(/\s+/);
        let initials = names[0].charAt(0).toLocaleUpperCase(LOCALE) + (names.length > 1 ? names[1].charAt(0).toLocaleUpperCase(LOCALE) : '');

        // melhor garantir
        if (initials === 'CU') {
            initials = 'C';
        }

        return initials;
    });

    toggleMenu() {
        this.navService.showNav.set(true);
    }

    logoutUser() {
        this.userInfoProvider.logout();
    }

    showUserInfo() {
        this.clearHideUserInfoTimeout();
        this.showTooltip = true;
        const targetElement = this.avatarElement().nativeElement;
        const rect = targetElement.getBoundingClientRect();
        this.tooltipTop = window.scrollY + rect.bottom; // Posiciona abaixo do avatar
        this.tooltipRight = document.body.getBoundingClientRect().right - rect.right; // Alinha com a margem direita do avatar
    }

    private clearHideUserInfoTimeout() {
        window.clearTimeout(this.hideUserInfoTimeout);
        this.hideUserInfoTimeout = 0;
    }

    hideUserInfo() {
        this.clearHideUserInfoTimeout();
        this.hideUserInfoTimeout = window.setTimeout(() => (this.showTooltip = false), 100);
    }
}
