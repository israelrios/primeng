import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'target-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                A page may have multiple toast components, in case you'd like to target a specific message to a particular toast, use the
                <i>key</i> property so that toast and the message can match.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-center gap-2">
            <p-toast key="toast1" />
            <p-toast key="toast2" />
            <p-button (click)="showToast1()" label="Show Success" />
            <p-button (click)="showToast2()" label="Show Warning" severity="warn" />
        </div>
        <app-code [code]="code" selector="toast-target-demo"></app-code>
    `,
    providers: [MessageService]
})
export class TargetDoc {
    constructor(private messageService: MessageService) {}

    showToast1() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1' });
    }

    showToast2() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' });
    }

    code: Code = {
        basic: `<p-toast key="toast1" />
<p-toast key="toast2" />
<p-button

    (click)="showToast1()"
    label="Show Success" />
<p-button

    (click)="showToast2()"
    label="Show Warning"
    severity="warn" />`,
        html: `<div class="card flex justify-center gap-2">
    <p-toast key="toast1" />
    <p-toast key="toast2" />
    <p-button

        (click)="showToast1()"
        label="Show Success" />
    <p-button

        (click)="showToast2()"
        label="Show Warning"
        severity="warn" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-target-demo',
    templateUrl: './toast-target-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastTargetDemo {
    constructor(private messageService: MessageService) {}

    showToast1() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1' });
    }

    showToast2() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' });
    }
}`
    };
}
