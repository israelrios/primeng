import { Code } from '@/domain/code';
import { Component } from '@angular/core';
@Component({
    selector: 'select-button-import-doc',
    standalone: false,
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { SelectButtonModule } from 'primeng/selectbutton';`
    };
}
