import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { NgOptimizedImage } from '@angular/common';
import { TEMPLATE_CONFIG, UserInfo, UserInfoProvider } from '../template.config';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

const LOCALE = 'pt-BR';

@Component({
    selector: 's-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [NgOptimizedImage],
    host: {
        class: 'br-header'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    private readonly navService = inject(SideNavService);
    readonly templateConfig = inject(TEMPLATE_CONFIG);
    private readonly userInfoProvider = inject(UserInfoProvider);

    readonly showTooltip = signal(false);
    readonly tooltipTop = signal(0);
    readonly tooltipRight = signal(0);
    private hideUserInfoTimeout = 0;
    readonly showSystemFunctions = signal(false);

    readonly showSearch = input(false);
    readonly pageTitle = input.required<string>();

    readonly avatarElement = viewChild.required<ElementRef<HTMLElement>>('avatar');

    readonly user = toSignal(this.userInfoProvider.getUser().pipe(map((user) => (user ? this.extendUserWithDefaults(user) : undefined))));

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

    readonly hasUserAvatar = computed(() => {
        const user = this.user();
        const avatarUrl = user?.avatarUrl ? user.avatarUrl() : undefined;
        return avatarUrl && avatarUrl !== 'images/user-default.png';
    });

    readonly userDisplayName = computed(() => {
        const user = this.user();
        return user ? user.name() : 'Usuário';
    });

    readonly userUnitName = computed(() => {
        const user = this.user();
        return user?.unitName ? user.unitName() : undefined;
    });

    readonly showUserInitials = computed(() => {
        return this.initials() && !this.hasUserAvatar();
    });

    readonly avatarAccessibilityLabel = computed(() => {
        const userName = this.userDisplayName();
        const unitName = this.userUnitName();
        return unitName ? `${userName} - ${unitName}` : userName;
    });

    constructor() {
        // Escape to close dropdown
        effect((onCleanup) => {
            if (this.showSystemFunctions()) {
                // Focus management when the dropdown opens
                const handleEscape = (event: KeyboardEvent) => {
                    if (event.key === 'Escape') {
                        this.showSystemFunctions.set(false);
                        event.preventDefault();
                    }
                };
                document.addEventListener('keydown', handleEscape);

                // Cleanup when the dropdown closes
                onCleanup(() => {
                    document.removeEventListener('keydown', handleEscape);
                });
            }
        });

        // Effect to handle click outside to close dropdown
        effect((onCleanup) => {
            if (this.showSystemFunctions()) {
                const handleClickOutside = (event: Event) => {
                    const target = event.target as HTMLElement;
                    if (!target.closest('.header-functions')) {
                        this.showSystemFunctions.set(false);
                    }
                };
                setTimeout(() => {
                    document.addEventListener('click', handleClickOutside);
                }, 0);

                onCleanup(() => {
                    document.removeEventListener('click', handleClickOutside);
                });
            }
        });
    }

    private extendUserWithDefaults(user: UserInfo): UserInfo {
        return {
            ...user,
            unitName: user.unitName || (() => undefined),
            avatarUrl: user.avatarUrl || (() => undefined)
        };
    }

    toggleMenu() {
        this.navService.showNav.set(true);
    }

    toggleSystemFunctions(event?: Event) {
        event?.stopPropagation();
        this.showSystemFunctions.update((value) => !value);
    }

    logoutUser() {
        this.userInfoProvider.logout();
    }

    showUserInfo() {
        this.clearHideUserInfoTimeout();
        this.showTooltip.set(true);
        const targetElement = this.avatarElement().nativeElement;
        const rect = targetElement.getBoundingClientRect();
        this.tooltipTop.set(window.scrollY + rect.bottom); // Posiciona abaixo do avatar
        this.tooltipRight.set(document.body.getBoundingClientRect().right - rect.right); // Alinha com a margem direita do avatar
    }

    private clearHideUserInfoTimeout() {
        window.clearTimeout(this.hideUserInfoTimeout);
        this.hideUserInfoTimeout = 0;
    }

    hideUserInfo() {
        this.clearHideUserInfoTimeout();
        this.hideUserInfoTimeout = window.setTimeout(() => this.showTooltip.set(false), 100);
    }
}
