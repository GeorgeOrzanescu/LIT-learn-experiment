## Lit element basics

### Intro
_**lit-element**_ is a lightweight base class for creating fast, reusable _Web Components_. 
It's built on top of the Polymer library and the Web Components standard, and aims to make it easy to create and use web components in your application.

### Setup
```js
npm i lit
```

```typescript
import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
```
Note* : u can also have a css file with all the styling properties for your component

