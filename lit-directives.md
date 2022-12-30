## Cache 

Caches rendered DOM when changing templates rather than discarding the DOM. You can use this directive to optimize rendering performance when frequently switching between large templates.
```typescript
const detailView = (data) => html`<div>...</div>`;
const summaryView = (data) => html`<div>...</div>`;

@customElement('my-element')
class MyElement extends LitElement {

  @property()
  data = {showDetails: true, /*...*/ };

  render() {
    return html`${cache(this.data.showDetails
      ? detailView(this.data)
      : summaryView(this.data)
    )}`;
  }
}
```
When the value passed to cache changes between one or more TemplateResults, the rendered DOM nodes for a given template are cached when they're not in use. 
<br/>
_**When the template changes, the directive caches the current DOM nodes before switching to the new value, and restores them from the cache when switching back to a previously-rendered value, rather than creating the DOM nodes anew.**_

## Guard

Prevents re-render of a template function until a single value or an array of values changes.
<br/>
U can also use it to trigger a certain function based on some value that needs to change ( ! validation comes to mind ).
```typescript
 ${guard([this.uuid], () => this.changeCheckedState())}
```

## Choose

Chooses and evaluates a template function from a list based on matching the given value to a case.

```typescript
${choose(this.selectedType, [
                        ['default', () => html`<h1>Default type is evaluated and rendered</h1>`],
                        ['black', () => html`<h1>Black type is evaluated and rendered</h1>`],
                        ['white', () => html`<h1>White type is evaluated and rendered</h1>`],
                    ],
                    () => html`<h1>Error</h1>`)}
```

## ifDefined

Sets an attribute if the value is defined and removes the attribute if undefined.
For AttributeParts, sets the attribute if the value is defined and removes the attribute if the value is undefined (undefined or null).

```html
<div class=${ifDefined(this.backgroundChange)}>
    <p>The aspect of this div should change if something is defined!</p>
</div>
```
Note* for clarity this will completely remove the attribute if the value is undefined.