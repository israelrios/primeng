import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 's-global-loading-indicator',
    standalone: true,
    styleUrls: ['./global-loading-indicator.component.scss'],
    templateUrl: './global-loading-indicator.component.html'
})
export class GlobalLoadingIndicatorComponent implements OnInit {
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);

    private readonly loadingTrigger$ = new Subject<boolean>();

    loading = signal(false);

    ngOnInit(): void {
        // Set up debounced loading state updates
        this.loadingTrigger$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(300)).subscribe((loading) => {
            this.loading.set(loading);
        });

        // exibe o indicador de carregamento global só na transição entre páginas
        this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
            next: (event) => {
                if (event instanceof NavigationStart) {
                    this.loadingTrigger$.next(true);
                } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                    this.loadingTrigger$.next(false);
                    // fecha imediatamente
                    this.loading.set(false);
                }
            }
        });
    }
}
