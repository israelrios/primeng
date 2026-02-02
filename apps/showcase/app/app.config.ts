import { routes } from '@/router/app.routes';
import { DemoCodeService } from '@/service/democodeservice';
import { DesignerService } from '@/service/designerservice';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { DsGovTheme } from 'primeng/presets';

function initializeDemoCode(demoCodeService: DemoCodeService) {
    return () => demoCodeService.loadDemos();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })), // withEnabledBlockingInitialNavigation()
        provideHttpClient(withFetch()),
        providePrimeNG({
            theme: {
                preset: DsGovTheme,
                options: {
                    darkModeSelector: '.p-dark'
                }
            },
            ripple: false
        }),
        MessageService,
        DesignerService,
        ConfirmationService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeDemoCode,
            deps: [DemoCodeService],
            multi: true
        }
    ]
};
