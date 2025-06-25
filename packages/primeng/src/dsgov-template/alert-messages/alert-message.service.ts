import { inject, Injectable, Signal, signal } from '@angular/core';

import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

import { AlertMessage } from './alert-message.model';
import { AlertMessageOptions } from './alert-message-options.model';
import { AlertMessageType } from './alert-message-type.model';
import { MessageService } from 'primeng/api';

const MIN_DISPLAY_TIME = 4000; //em millis

@Injectable({
    providedIn: 'root'
})
export class AlertMessageService {
    private readonly primeMessageService = inject(MessageService);

    private readonly _messages = signal(<AlertMessage[]>[]);

    get messages(): Signal<AlertMessage[]> {
        return this._messages.asReadonly();
    }

    public success(title: string, description?: string, details?: string[], options?: AlertMessageOptions): AlertMessage {
        return this.push('success', title, description, details, options);
    }

    public info(title: string, description?: string, details?: string[], options?: AlertMessageOptions): AlertMessage {
        return this.push('info', title, description, details, options);
    }

    public warn(title: string, description?: string, details?: string[], options?: AlertMessageOptions): AlertMessage {
        return this.push('warn', title, description, details, options);
    }

    public error(title: string, description?: string, details?: string[], options?: AlertMessageOptions): AlertMessage {
        return this.push('error', title, description, details, options);
    }

    public dismiss(message: AlertMessage): void {
        this._messages.update((value) =>
            value.filter((alertMessage) => {
                return alertMessage !== message;
            })
        );
    }

    public dismissAll(): void {
        this._messages.set([]);
    }

    private push(type: AlertMessageType, title: string, description?: string, details?: any[] | string[], options?: AlertMessageOptions): AlertMessage {
        let message = this._messages().find((msg) => msg.type === type && msg.title === title && msg.description === description && msg.target === options?.target);

        if (!message) {
            message = {
                type,
                title,
                description,
                details,
                count: 1,
                time: Date.now(),
                options: options || { dismissible: true, delay: 0 }
            };
            this._messages.update((value) => [...value, message]);
        } else {
            message.count++;
            if (details) {
                if (!message.details) {
                    message.details = [];
                }
                message.details.push(...details);
            }
        }

        if (message.options.delay && message.options.delay > 0) {
            timer(message.options.delay)
                .pipe(take(1))
                .subscribe(() => this.dismiss(message));
        }

        return message;
    }

    toast(detail: string, severity: AlertMessageType = 'error'): void {
        this.primeMessageService.add({ severity: severity, detail: detail, key: 'toast' });
    }

    removeOld(): void {
        this.filter(AlertMessageService.isRecent);
    }

    private static isRecent(msg: AlertMessage): boolean {
        return Date.now() - msg.time < MIN_DISPLAY_TIME;
    }

    removeOnNavigation(): void {
        this.filter((msg) => {
            const options = msg.options;
            if (options.keepOnNavigation) {
                options.keepOnNavigation = false;
                return true;
            }
            return false;
        });
    }

    private filter(filterFn: (msg: AlertMessage) => boolean) {
        for (const msg of this._messages()) {
            if (!filterFn(msg)) {
                this.dismiss(msg);
            }
        }
    }
}
