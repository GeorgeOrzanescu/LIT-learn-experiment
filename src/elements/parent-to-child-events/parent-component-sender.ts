import { LitElement, html, css } from 'lit';
import {customElement, property} from "lit/decorators.js";
import "./child-component-receiver"

@customElement("parent-component-sender")
class ParentComponentSender extends LitElement {

    static styles = css`
    .parent-container {
      margin-top: 10px;
      border: 1px solid;
    }
  `;

    @property({type:Boolean})
    allowMessageChange = false;

    private _messageChangeListener(e: CustomEvent) {
        console.log(e.detail.message);
        if (!this.allowMessageChange) {
            e.preventDefault();
            e.detail.message = '✅ Prevented!!';
        }
        e.preventDefault();
        e.detail.message = `message changed from the parent ${Math.random()}`
    }

    render() {
        return html`
            <div class="parent-container">
                <child-component-receiver @overwrite-message=${this._messageChangeListener}></child-component-receiver>
            </div>
    `;
    }
}
