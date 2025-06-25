import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Describes the user information to be displayed in the header.
 */
export interface UserInfo {
    /** User's full name. */
    name(): string | undefined;

    /** User's organizational unit or department. */
    unitName(): string | undefined;

    /** URL for the user's avatar image. */
    avatarUrl?(): string | undefined;
}

/**
 * An abstract provider class for user-related information and actions.
 * The consuming application must provide a service that extends this class.
 */
export abstract class UserInfoProvider {
    /** Returns an observable of the current user's information. */
    abstract getUser(): Observable<UserInfo | undefined>;

    /** Logs the user out. */
    abstract logout(): void;
}

/**
 * Configuration for the main application template.
 */
export interface TemplateConfig {
    /** The full name of the application. */
    appName: string;
    /** The acronym or short name of the application. */
    appAcronym: string;
    /** URL for the header logo. */
    logoUrl: string;
    /** Alt text for the header logo. */
    logoAltText: string;
    /** Home url. */
    homeUrl: string;
}

/**
 * Injection token to provide the template configuration.
 */
export const TEMPLATE_CONFIG = new InjectionToken<TemplateConfig>('template.config');
