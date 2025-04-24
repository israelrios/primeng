import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

const theme = ({ dt }) => `
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${dt('togglebutton.color')};
    background: ${dt('togglebutton.background')};
    border: 1px solid ${dt('togglebutton.border.color')};
    padding: ${dt('togglebutton.padding')};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt('togglebutton.transition.duration')}, color ${dt('togglebutton.transition.duration')}, border-color ${dt('togglebutton.transition.duration')},
        outline-color ${dt('togglebutton.transition.duration')}, box-shadow ${dt('togglebutton.transition.duration')};
    border-radius: ${dt('togglebutton.border.radius')};
    outline-color: transparent;
    font-weight: ${dt('togglebutton.font.weight')};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${dt('togglebutton.gap')};
    padding: ${dt('togglebutton.content.padding')};
    background: transparent;
    border-radius: ${dt('togglebutton.content.border.radius')};
    transition: background ${dt('togglebutton.transition.duration')}, color ${dt('togglebutton.transition.duration')}, border-color ${dt('togglebutton.transition.duration')},
            outline-color ${dt('togglebutton.transition.duration')}, box-shadow ${dt('togglebutton.transition.duration')};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${dt('togglebutton.hover.background')};
    color: ${dt('togglebutton.hover.color')};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${dt('togglebutton.checked.background')};
    border-color: ${dt('togglebutton.checked.border.color')};
    color: ${dt('togglebutton.checked.color')};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${dt('togglebutton.content.checked.background')};
    box-shadow: ${dt('togglebutton.content.checked.shadow')};
}

.p-togglebutton:focus-visible {
    box-shadow: ${dt('togglebutton.focus.ring.shadow')};
    outline: ${dt('togglebutton.focus.ring.width')} ${dt('togglebutton.focus.ring.style')} ${dt('togglebutton.focus.ring.color')};
    outline-offset: ${dt('togglebutton.focus.ring.offset')};
}

.p-togglebutton.p-invalid {
    border-color: ${dt('togglebutton.invalid.border.color')};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${dt('togglebutton.disabled.background')};
    border-color: ${dt('togglebutton.disabled.border.color')};
    color: ${dt('togglebutton.disabled.color')};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${dt('togglebutton.icon.color')};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.hover.color')};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.checked.color')};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.disabled.color')};
}

.p-togglebutton-sm {
    padding: ${dt('togglebutton.sm.padding')};
    font-size: ${dt('togglebutton.sm.font.size')};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${dt('togglebutton.content.sm.padding')};
}

.p-togglebutton-lg {
    padding: ${dt('togglebutton.lg.padding')};
    font-size: ${dt('togglebutton.lg.font.size')};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${dt('togglebutton.content.lg.padding')};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${dt('togglebutton.invalid.border.color')};
}
`;

const classes = {
    root: ({ instance }) => ({
        'p-togglebutton p-component': true,
        'p-togglebutton-checked': instance.checked,
        'p-disabled': instance.disabled,
        'p-togglebutton-sm p-inputfield-sm': instance.size === 'small',
        'p-togglebutton-lg p-inputfield-lg': instance.size === 'large'
    }),
    content: 'p-togglebutton-content',
    icon: 'p-togglebutton-icon',
    label: 'p-togglebutton-label'
};

@Injectable()
export class ToggleButtonStyle extends BaseStyle {
    name = 'togglebutton';

    theme = theme;

    classes = classes;
}

/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.primeng.org/togglebutton/)
 *
 * @module togglebuttonstyle
 *
 */
export enum ToggleButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-togglebutton',
    /**
     * Class name of the icon element
     */
    icon = 'p-togglebutton-icon',
    /**
     * Class name of the label element
     */
    label = 'p-togglebutton-label'
}

export interface ToggleButtonStyle extends BaseStyle {}
