## connectedCallback()

Invoked when a component is added to the document's DOM. 
In _connectedCallback()_ you should perform tasks that should only occur when the element is connected to the document.

## disconnectedCallback()

Invoked when a component is removed from the document's DOM.
This callback is the main signal to the element that it may no longer be used; as such, disconnectedCallback() should ensure that nothing is holding a reference to the element (such as event listeners added to nodes external to the element), so that it is free to be garbage collected.

See: [lit-component-lifecycle](./src/elements/lit-component-lifecycle.ts)