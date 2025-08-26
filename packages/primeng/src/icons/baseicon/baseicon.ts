import { booleanAttribute, ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { cn } from '@primeuix/utils';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseIconStyle } from './style/baseiconstyle';

@Component({
    template: ` <ng-content></ng-content> `,
    selector: 'svg[data-p-icon="should-not-match-only-for-host-binding-attributes"]',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [BaseIconStyle],
    host: {
        width: '14',
        height: '14',
        '[attr.viewBox]': 'viewBox',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        '[class]': 'getClassNames()'
    }
})
export class BaseIcon extends BaseComponent {
    @Input({ transform: booleanAttribute }) spin: boolean = false;

    _componentStyle = inject(BaseIconStyle);

    viewBox = '0 0 14 14';

    getClassNames() {
        return cn('p-icon', {
            'p-icon-spin': this.spin
        });
    }
}
