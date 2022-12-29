## Property

The _@property()_ decorator is used to define a property of a custom element class that can be observed by the element's render function. When the value of a property changes, the element's render function will be called, allowing the element to update its appearance in the DOM.

In lit-element, the _**reflect: true_** option of the @property() decorator is used to specify that the value of the property should be reflected to the corresponding attribute of the element in the DOM. When the value of a property with _**reflect: true_** changes, the corresponding attribute of the element in the DOM will be updated to match the new value.

The _**attribute: false_** option. This means that the value of the message property will not be initialized from the corresponding message attribute in the element's markup, and changes to the message attribute will not affect the value of the message property.

```html
<!-- In the HTML file -->
<my-element message="Hello, lit-element!"></my-element>
```
```typescript
import { LitElement, property } from 'lit-element';

class MyElement extends LitElement {
  @property({ attribute: false }) message = 'Hello, World!';

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}

customElements.define('my-element', MyElement);
```
In this example, the message attribute of the my-element element in the HTML file is set to "Hello, lit-element!". However, because the message property is defined with the attribute: false option, the value of the message property will not be initialized from the message attribute in the element's markup. Instead, the value of the message property will be the default value of "Hello, World!" specified in the element class.

This means that the element will render with the message "Hello, World!", rather than the value of the message attribute in the HTML file.

The attribute: false option can be useful in cases where you want to control the value of a property entirely from JavaScript, and do not want the value of the property to be affected by the value of the corresponding attribute in the DOM.

## State

On the other hand, the _@state()_ decorator is a shorthand for defining a property with the @property() decorator and a setter that updates the value of the property and calls requestUpdate(). The requestUpdate() method is a lit method that schedules an update to the element's rendering.

_Note* : one subtle difference between them is that property always create a html attribute on the element_

Play with: [lit-element](./src/elements/lit-component.ts)