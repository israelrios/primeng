import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})
export class SideNavService {
    readonly showNav = signal<boolean>(false);

    constructor() {
        const router = inject(Router);

        router.events.pipe(takeUntilDestroyed()).subscribe(() => {
            this.showNav.set(false);
        });
    }
}
