import { LitElement, html } from 'lit';
import {customElement, property} from "lit/decorators.js";

@customElement("child-component-receiver")
class ChildComponentReceiver extends LitElement {

    @property() message = "Default message";

    private _tryChangeMessage(event: Event) {
        const detail = {message: this.message};
        const customEvent = new CustomEvent('overwrite-message', {detail, bubbles: true, composed: true, cancelable: true});
        this.dispatchEvent(customEvent);
        if (customEvent.defaultPrevented) {
            event.preventDefault();
        }
        this.message = detail.message;
    }

    render() {
        return html`
          <p>Waiting for message from parent...</p>
          <button @click=${this._tryChangeMessage}>Change message</button>
          <p>${this.message}</p>
    `;
    }
}

