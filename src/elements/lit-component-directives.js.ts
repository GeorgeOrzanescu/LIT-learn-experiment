import {LitElement, html, TemplateResult, css} from "lit";
import {customElement, state, property} from "lit/decorators.js"
import { cache } from 'lit/directives/cache.js';
import {guard} from 'lit/directives/guard.js';
import {choose} from 'lit/directives/choose.js';
import {ifDefined} from 'lit/directives/if-defined.js';

@customElement("lit-component-directives")
class LitComponentDirectives extends LitElement {

    @state()
    checked: boolean = false;

    @property()
    uuid: string = "";

    @property()
    selectedType: string = "default";

    private types : string[] = ["default", "black", "white"];

    @property()
    backgroundChange: string | undefined = undefined;

    static styles = css`
    .green {
      background-color: green;
      border: 1px solid;
    }
  `;

    render(): TemplateResult {
        return html`
            <h3>Directives in LIT</h3>
            <p>${cache(this.checked ? 
                    html`Checked state is set to true` : 
                    html`Checked state is set to false`
            )}</p>
            <br/>
            <p>uuid value: ${this.uuid}</p>
            ${guard([this.uuid], () => this.changeCheckedState())}
            <button @click=${this.handleChangeUUID}>Change uuid</button>
            <button @click=${this.handleChangeType}>Change type: current: ${this.selectedType}</button>
            <br/>
            ${choose(this.selectedType, [
                        ['default', () => html`<h1>Default type is evaluated and rendered</h1>`],
                        ['black', () => html`<h1>Black type is evaluated and rendered</h1>`],
                        ['white', () => html`<h1>White type is evaluated and rendered</h1>`],
                    ],
                    () => html`<h1>Error</h1>`)}
            <br/>
            <div class=${ifDefined(this.backgroundChange)}>
                <p>The aspect of this div should change if something is defined!</p>
            </div>
           
        `
    }

    private changeCheckedState() : void {
        this.checked = !this.checked;
        console.log("Checked state changed")
    }

    private handleChangeUUID(): void {
        this.uuid = Math.random().toString();
    }

    private handleChangeType(): void {
        this.selectedType = this.types[ Math.floor(Math.random() * 3)];
    }
}