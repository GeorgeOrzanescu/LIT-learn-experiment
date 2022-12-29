import {LitElement, html, TemplateResult, css} from "lit";
import {customElement} from "lit/decorators.js"
import "./lit-text-input-component"


@customElement("form-component")
class FormComponent extends LitElement {

    static styles = css`
      .form-container {
        margin-top: 10px;
        border: 1px solid;
        border-radius: 10px;
      }

      h1 {
        text-align: center;
      }
    `;

    private validateNameInputEvent(e: CustomEvent) {
        console.log(e.detail);
        if (this.validateUserName(e.detail.nameInput)) {
            e.preventDefault();
            e.detail.nameValid = true;
        }
        else {
            console.log("Input valid and received by parent", e.detail.nameInput)
        }
    }

    private validateEmailInputEvent(e: CustomEvent) {
        console.log(e.detail);
        if (this.validateEmailName(e.detail.emailInput)) {
            e.preventDefault();
            console.log(e.detail.emailInput.includes("@"))
            e.detail.emailValid = true;
        }
        else {
            console.log("Input valid and received by parent", e.detail.emailInput)
        }
    }

    render(): TemplateResult {
        return html`
            <div class="form-container">
                <h1>Form validation with events</h1>
                <text-input-component 
                        @input-name-event=${this.validateNameInputEvent}
                        @input-email-event=${this.validateEmailInputEvent}
                >
                </text-input-component>
            </div>`
    }

    private validateUserName(username: string): boolean {
        return username.length < 5 || username.trim().length === 0;
    }

    private validateEmailName(email: string): boolean {
        return email.length < 8 || email.trim().length === 0 || !email.includes("@");
    }

}