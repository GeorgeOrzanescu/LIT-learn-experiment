import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import "./lit-component-question";
import { questions } from "../data";

@customElement("lit-component-quiz")
class LitComponentQuiz extends LitElement {
  static styles = css``;

  protected render(): TemplateResult {
    return html`
      <div class="quiz-container">
        ${repeat(
          questions,
          (question) =>
            html`<lit-component-question
              .question=${question}
            ></lit-component-question>`
        )}
      </div>
    `;
  }
}
