import { Component } from '@angular/core';

@Component({
    selector: 'scroll-top-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-scrolltop</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-scrolltop-sticky</td>
                        <td>Container element when attached to its parent.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
