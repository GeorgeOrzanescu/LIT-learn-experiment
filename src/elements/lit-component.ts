import {LitElement, html, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js"

@customElement("input-counter")
class InputCounter extends LitElement {

    @property({type: Number})
    counter: number = 0;

    // @state()
    // counter: number = 0;

    render(): TemplateResult {
        return html`
            <p>${this.counter}</p>
            <button type="button" @click=${this.handleIncreaseCount}>Increment</button>
            <button type="button" @click=${this.handleDecreaseCount}>Decrement</button>
        `
    }

    private handleIncreaseCount(): void {
        console.log("Increment")
        this.counter++;
    }

    private handleDecreaseCount(): void {
        console.log("Decrement")
        this.counter--;
    }
}