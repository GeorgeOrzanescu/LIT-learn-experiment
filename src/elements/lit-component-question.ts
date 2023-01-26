import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("lit-component-question")
class LitComponentQuestion extends LitElement {
  static styles = css`
    .input-container {
      display: flex;
      flex-direction: column;
      width: 15em;
      gap: 10px;
    }
  `;

  @property({ type: Array })
  items: string[] = []; //for array properties the reference must change to trigger a re-render

  protected render(): TemplateResult {
    return html`
      <div class="input-container"></div>
      ${repeat(this.items, (item) => html`<p>Item : ${item}</p>`)}
    `;
  }
}
