import {LitElement, html, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js"

@customElement("lit-lifecycle-demo")
class LitLifecycleDemo extends LitElement {

    @property()
    message = "Lifecycle"

    private eventIntervalTimer?: NodeJS.Timer;

    connectedCallback() {
        super.connectedCallback();
        this.message = "Changed the property message with this text!, after the component is connected";

        this.eventIntervalTimer = setInterval(this.printTextToConsole,1000);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.eventIntervalTimer);
    }

    render(): TemplateResult {
        return html`
            <h1>Component to demo the lifecycle in lit</h1>
            <pre>${this.message}</pre>
        `
    }

    printTextToConsole(): void {
        console.log("random text")
    }
}