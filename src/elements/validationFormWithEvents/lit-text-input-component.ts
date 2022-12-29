import {LitElement, html, TemplateResult, css} from "lit";
import {customElement, state} from "lit/decorators.js"
import '@vaadin/text-field';

@customElement("text-input-component")
class LitTextInputComponent extends LitElement {

    static styles = css`
      .inputs-container {
        display: flex;
        flex-direction: column;
      }
      
      #user-field, #email-field {
        margin-left: 2em;
        width: 15em;
      }
    `

    @state()
    private userNameInput: string = "";

    @state()
    private emailInput: string = "";

    @state()
    private userNameValid: boolean = false;

    @state()
    private emailValid: boolean = false;

    render(): TemplateResult {
        return html`
            <div class="inputs-container">
                <vaadin-text-field
                        id="user-field"
                        label="User name"
                        value=${this.userNameInput}
                        ?invalid=${this.userNameValid}
                        @change=${this.handleNameInput}
                >
                </vaadin-text-field>
                <vaadin-text-field
                        id="email-field"
                        label="email"
                        value=${this.emailInput}
                        ?invalid=${this.emailValid}
                        @change=${this.handleEmailInput}

                >
                </vaadin-text-field>
            </div>
        `
    }

    private handleNameInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.userNameInput = target.value;
        this.sendInputNameEvent(event)
    }

    private handleEmailInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.emailInput = target.value;
        console.log(this.emailInput);
        this.sendInputEmailEvent(event);
    }

    private sendInputNameEvent(event: Event) {
        const detail = {
            nameInput: this.userNameInput,
            nameValid: false
        };

        const inputEvent = new CustomEvent('input-name-event', {detail, bubbles: true, composed: true, cancelable: true});
        this.dispatchEvent(inputEvent);
        if (inputEvent.defaultPrevented) {
            event.preventDefault();
        }
        this.userNameValid = detail.nameValid;
    }

    private sendInputEmailEvent(event: Event) {
        const detail = {
            emailInput: this.emailInput,
            emailValid: false
        };

        const inputEvent = new CustomEvent('input-email-event', {detail, bubbles: true, composed: true, cancelable: true});
        this.dispatchEvent(inputEvent);
        if (inputEvent.defaultPrevented) {
            event.preventDefault();
        }
        this.emailValid = detail.emailValid;
    }
}