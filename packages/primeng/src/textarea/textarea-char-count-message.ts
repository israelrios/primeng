import { ApplicationRef, booleanAttribute, ChangeDetectionStrategy, Component, computed, createComponent, DestroyRef, Directive, effect, ElementRef, EnvironmentInjector, inject, input, inputBinding, Renderer2, signal } from '@angular/core';
import { NgControl } from '@angular/forms';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
    selector: 'textarea[showCharCount]'
})
export class TextareaCharCountDirective {
    private static readonly flexWrappedParents = new WeakMap<HTMLElement, { count: number; originalFlexWrap: string }>();

    private readonly host = inject<ElementRef<HTMLTextAreaElement>>(ElementRef);
    private readonly injector = inject(EnvironmentInjector);
    private readonly control = inject(NgControl, { self: true, optional: true });
    private readonly applicationRef = inject(ApplicationRef);
    private readonly renderer = inject(Renderer2);

    readonly showCharCount = input(true, { transform: booleanAttribute });

    constructor() {
        effect((onCleanup) => {
            if (!this.showCharCount()) {
                return;
            }

            const ref = this.createComponent();
            if (ref) {
                onCleanup(() => ref.destroy());
            }
        });
    }

    private createComponent() {
        const textareaEl = this.host.nativeElement;
        const parent = this.renderer.parentNode(textareaEl) as HTMLElement | null;

        if (!parent) {
            return null;
        }

        const ref = createComponent(TextareaCharCountMessage, {
            environmentInjector: this.injector,
            bindings: [inputBinding('textarea', () => this.host.nativeElement), inputBinding('control', () => this.control)]
        });

        const nextSibling = this.renderer.nextSibling(textareaEl);

        if (nextSibling) {
            this.renderer.insertBefore(parent, ref.location.nativeElement, nextSibling);
        } else {
            this.renderer.appendChild(parent, ref.location.nativeElement);
        }

        const cleanup = this.ensureMessagePlacement(parent);
        this.applicationRef.attachView(ref.hostView);

        ref.onDestroy(() => cleanup());

        return ref;
    }

    private ensureMessagePlacement(parent: HTMLElement) {
        const computed = this.getComputedStyle(parent);
        const display = computed?.display ?? '';
        let restoreFlexWrap: (() => void) | undefined;

        if (display === 'flex' || display === 'inline-flex') {
            restoreFlexWrap = this.ensureParentWraps(parent);
        }

        return () => restoreFlexWrap?.();
    }

    private ensureParentWraps(parent: HTMLElement) {
        const flexParentState = TextareaCharCountDirective.flexWrappedParents.get(parent);

        if (flexParentState) {
            flexParentState.count += 1;
        } else {
            TextareaCharCountDirective.flexWrappedParents.set(parent, { count: 1, originalFlexWrap: parent.style.flexWrap });
            this.renderer.setStyle(parent, 'flex-wrap', 'wrap');
        }

        return () => this.restoreFlexWrap(parent);
    }

    private restoreFlexWrap(parent: HTMLElement) {
        const state = TextareaCharCountDirective.flexWrappedParents.get(parent);

        if (!state) {
            return;
        }

        state.count -= 1;

        if (state.count === 0) {
            if (state.originalFlexWrap) {
                this.renderer.setStyle(parent, 'flex-wrap', state.originalFlexWrap);
            } else {
                this.renderer.removeStyle(parent, 'flex-wrap');
            }

            TextareaCharCountDirective.flexWrappedParents.delete(parent);
        }
    }

    private getComputedStyle(element: HTMLElement) {
        const view = element.ownerDocument.defaultView;

        return view ? view.getComputedStyle(element) : null;
    }
}

@Component({
    template: `
        @if (maxLength()) {
            <span aria-live="polite">
                @if (textLength() == 0) {
                    Limite máximo de <strong>{{ maxLength() }}</strong>
                } @else {
                    Restam <strong>{{ remaining() }}</strong>
                }
                caracteres</span
            >
        } @else {
            <span
                ><strong>{{ textLength() }}</strong> caracteres digitados</span
            >
        }
    `,
    styles: `
        :host {
            display: block;
            font-size: var(--font-size-scale-down-01);
            font-weight: var(--font-weight-medium);
            width: 100%;
            flex: 0 0 100%; /* for a parent with display: flex */
            order: 1; /* for a parent with display: flex */
            grid-column: 1 / -1; /* for a parent with display: grid */
        }
        :where(textarea[readonly], textarea[disabled]) + :host {
            display: none;
        }
    `,
    host: {
        class: 'textarea-char-count'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaCharCountMessage {
    private readonly destroyRef = inject(DestroyRef);

    readonly control = input<NgControl>();
    readonly textarea = input.required<HTMLTextAreaElement>();

    protected readonly maxLength = signal<number | null>(null);
    protected readonly textLength = signal(0);
    protected readonly remaining = computed(() => Math.max((this.maxLength() ?? 0) - this.textLength(), 0));

    constructor() {
        let subs: Subscription;
        effect(() => {
            const events: Observable<any>[] = [fromEvent(this.textarea(), 'input')];
            const valueChanges = this.control()?.valueChanges;

            if (valueChanges) {
                events.push(valueChanges);
            }

            subs?.unsubscribe();

            subs = merge(...events)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => this.updateCounter());

            const maxLength = this.textarea()?.maxLength;
            this.maxLength.set(maxLength > 0 ? maxLength : null);

            this.updateCounter();
        });
    }

    private updateCounter() {
        this.textLength.set(this.textarea().value.length);
    }
}
