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

By default, an event dispatched inside a shadow root will not be visible outside that shadow root. 
To make an event pass through shadow DOM boundaries, you must set the _**composed property to true_**. 
It's common to pair composed with bubbles so that all nodes in the DOM tree can see the event.
<br></br>
If an event is composed and does bubble, it can be received by all ancestors of the element that dispatches the event—including ancestors in outer shadow roots.
<br></br>
_**If an event is composed but does not bubble,**_ it can only be received on the element that dispatches the event and on the host element containing the shadow root.

### For the cases when you need to communicate between to child components !
![mediator-pattern]()