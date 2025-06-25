import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { AlertMessage } from './alert-message.model';
import { AlertMessageService } from './alert-message.service';
import { NgClass } from '@angular/common';

interface MessageTypeConf {
    icon: string;
    class: string;
    text: string;
}

const MessageTypeMap: { [key: string]: MessageTypeConf } = {
    success: { icon: 'fa-check-circle', class: 'success', text: 'Sucesso' },
    info: { icon: 'fa-info-circle', class: 'info', text: 'Informação' },
    warn: { icon: 'fa-exclamation-triangle', class: 'warning', text: 'Atenção' },
    error: { icon: 'fa-times-circle', class: 'danger', text: 'Erro' }
};

@Component({
    selector: 's-alert-messages',
    templateUrl: './alert-messages.component.html',
    styleUrls: ['./alert-messages.component.css'],
    imports: [NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertMessagesComponent {
    readonly onlyFor = input<string>();

    TYPEMAP = MessageTypeMap;

    private readonly alertMessageService = inject(AlertMessageService);

    messages = computed(() =>
        this.alertMessageService.messages().filter((message) => {
            return this.onlyFor() === message.target;
        })
    );

    constructor() {
        effect(() => {
            if (this.messages().length) {
                window.scrollTo(0, 0);
            }
        });
    }

    public dismiss(message: AlertMessage): void {
        this.alertMessageService.dismiss(message);
    }
}
