import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from "lit/decorators.js";
import {DataSource, dataSourceContext} from "./context";
import {consume} from "@lit-labs/context";
import {repeat} from "lit/directives/repeat.js";
import {ref,createRef} from "lit/directives/ref.js";

@customElement("lit-component-child")
class LitComponentChild extends LitElement {

    static styles = css`
      .input-container {
        display: flex;
        flex-direction: column;
        width: 15em;
        gap: 10px;
      }
    `;

    private textInputRef = createRef<HTMLInputElement>()

    @consume({context: dataSourceContext, subscribe: true})
    @property({attribute: false})
    public data!: DataSource;

    @property({type:Array})
    items: string[] = []; //for array properties the reference must change to trigger a re-render

    protected render(): TemplateResult {
        return html`
            <h3>This is a child component</h3>
            <h3>Current data retrieved from the consumed context</h3>
            <div class="input-container">
                <mwc-textfield outlined label="Enter a new item..." ${ref(this.textInputRef)}></mwc-textfield>
                <mwc-button raised @click=${this.handleAddItem}>Add item</mwc-button>
            </div>
            ${repeat(this.data.items,
                    (item) => html`<p>Item : ${item}</p>`)}
            ${repeat(this.items,(item) => html`<p>Item : ${item}</p>`)}
        `;
    }

    private handleAddItem() : void {
        //ADD TO PROPERTY STRING[]
        // if(this.textInputRef.value === undefined) return;
        // this.items = [...this.items,this.textInputRef.value.value]

        // ADD TO PROPERTY OBJECT / CONTEXT
        if(this.textInputRef.value === undefined) return;
        const newitems = [...this.data.items, this.textInputRef.value.value];
        this.data = Object.create(Object.assign(this.data, {items: newitems}));
        // must change the reference for an object property to update
        console.log(this.data);
    }
}