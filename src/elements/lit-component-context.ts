import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from "lit/decorators.js";
import {provide} from '@lit-labs/context';
import {DataSource, dataSourceContext} from "./context";
import {repeat} from 'lit/directives/repeat.js';
import {ref, createRef} from 'lit/directives/ref.js';
import "./lit-component-parent"
import '@material/mwc-button';
import '@material/mwc-textfield';

@customElement("lit-component-context")
class LitComponentContext extends LitElement {

    private textInputRef = createRef<HTMLInputElement>()

    static styles = css`
      .input-container {
        display: flex;
        flex-direction: column;
        width: 15em;
        gap: 10px;
      }
    `;

    @provide({context: dataSourceContext})
    @property({attribute: false, type: Object})
    public data: DataSource = {
        version: "1.0",
        items: ["item1", "item2", "item3", "item4"]
    }

    protected render(): TemplateResult {
        return html`
            <h1>This is the root component where the context is created and provided</h1>
            <h3>Current data source passed as context</h3>
            <div class="input-container">
                <mwc-textfield outlined label="Enter a new item..." ${ref(this.textInputRef)}></mwc-textfield>
                <mwc-button raised @click=${this.handleAddItem}>Add item</mwc-button>
            </div>
            ${repeat(this.data.items,
                    (item) => html`<p>Item : ${item}</p>`)}
            <lit-component-parent></lit-component-parent>

        `;
    }

    private handleAddItem() : void {
        if (this.textInputRef.value === undefined) return;
        const newitems = [...this.data.items, this.textInputRef.value.value];
        this.data = Object.create(Object.assign(this.data, {items: newitems}));
        // must change the reference for an object property to update
        console.log(this.data);
    }
}