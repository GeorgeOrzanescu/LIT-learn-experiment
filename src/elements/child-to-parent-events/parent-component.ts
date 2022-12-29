import {LitElement, html, TemplateResult} from "lit";
import {customElement, state} from "lit/decorators.js"
import "./child-component";

@customElement("parent-component")
class ParentComponent extends LitElement {

    @state()
    counter: number = 0;

    render(): TemplateResult {
        return html`
            <p>${this.counter}</p>
            <child-component 
                    @increment=${this.incrementingListener}
                    @decrement=${this.decrementingListener}>
            </child-component>
        `
    }

    incrementingListener(event: Event): void {
        event.stopPropagation();
        this.counter++;
    }

    decrementingListener(event: Event): void {
        event.stopPropagation();
        this.counter--;
    }
}