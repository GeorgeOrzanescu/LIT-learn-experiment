##Events

Events are the standard way that elements communicate changes. These changes typically occur due to user interaction. For example, a button dispatches a click event when a user clicks on it; an input dispatches a change event when the user enters a value in it.
<br></br>
In addition to these standard events that are automatically dispatched, Lit elements can dispatch custom events. For example, a menu element might dispatch an event to indicate the selected item changed; a popup element might dispatch an event when the popup opens or closes.
<br></br>
The events are always annotated with @<event name>

Example communication between parent-component and child-component

```typescript
import { LitElement, html } from 'lit-element';

class ParentComponent extends LitElement {
  handleMessageReceived(event: CustomEvent) {
    console.log(`Message received: ${event.detail.message}`);
  }

  render() {
    return html`
      <child-component @message-received=${this.handleMessageReceived}></child-component>
    `;
  }
}

customElements.define('parent-component', ParentComponent);
```

```typescript
import { LitElement, html } from 'lit-element';

class ChildComponent extends LitElement {
    sendMessage() {
        this.dispatchEvent(new CustomEvent('message-received', {
            detail: { message: 'Hello, parent!' }
        }));
    }

    render() {
        return html`
      <button @click=${this.sendMessage}>Send message</button>
    `;
    }
}

customElements.define('child-component', ChildComponent);
```
Also see this example: [child-to-parent-event](src/elements/child-to-parent-events/child-component.ts)

### For the cases when you need to communicate between to child components !
![mediator-pattern](../Screenshot 2022-12-29 at 18.43.50.png)