import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { IQuestion } from "../data";
import "@vaadin/checkbox-group";
import "@vaadin/checkbox";
import "@vaadin/button";

@customElement("lit-component-question")
class LitComponentQuestion extends LitElement {
  static styles = css`
    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh; /* 100% of the browser window's height */
    }

    vaadin-button {
      margin-top: 10px;
    }
  `;

  @property({ type: Object })
  question!: IQuestion;

  protected render(): TemplateResult {
    return html`
      <div class="input-container">
        <vaadin-checkbox-group label=${this.question.question} theme="vertical">
          ${this._renderCheckboxForAnswers(this.question.answers)}
        </vaadin-checkbox-group>
        <vaadin-button theme="primary">Submit answer</vaadin-button>
      </div>
    `;
  }

  private _renderCheckboxForAnswers(answers: string[]): TemplateResult {
    return html`
      ${repeat(
        answers,
        (answer, index) =>
          html`<vaadin-checkbox
            value=${index}
            label=${answer}
          ></vaadin-checkbox>`
      )}
    `;
  }
}
