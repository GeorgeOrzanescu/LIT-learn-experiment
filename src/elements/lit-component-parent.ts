import {html, LitElement, TemplateResult} from 'lit';
import {customElement} from "lit/decorators.js";
import "./lit-component-child"

@customElement("lit-component-parent")
class LitComponentParent extends LitElement {

    protected render(): TemplateResult {
        return html`
            <h2>This is a parent component</h2>
            <lit-component-child></lit-component-child>
        `;
    }
}