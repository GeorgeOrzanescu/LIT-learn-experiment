import {LitElement, html, TemplateResult} from "lit";
import {customElement, state} from "lit/decorators.js"

@customElement("child-component")
export class ChildComponent extends LitElement {


    render(): TemplateResult {
        return html`
            <button type="button" @click=${this.handleIncreaseCount}>Increment</button>
            <button type="button" @click=${this.handleDecreaseCount}>Decrement</button>
        `
    }

    private handleIncreaseCount(): void {
        console.log("Increment event fired");
        this.dispatchEvent(new Event("increment"));
    }

    private handleDecreaseCount(): void {
        console.log("Decrement event fired");
        this.dispatchEvent(new Event("decrement"));
    }
}