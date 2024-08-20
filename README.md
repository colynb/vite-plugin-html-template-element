# vite-plugin-html-template-element

A Vite plugin to import HTML (`*.tpl`) files as `HTMLTemplateElement`.

## Installation

```bash
npm install vite-plugin-html-template-element
```

## Usage

Add the plugin to your Vite configuration:

```typescript
import { defineConfig } from "vite";
import htmlTemplateElementPlugin from "vite-plugin-html-template-element";

export default defineConfig({
  plugins: [htmlTemplateElementPlugin()],
});
```

Then you can import HTML files as templates:

```typescript
import myTemplate from "./my-template.tpl";

customElements.define(
  "my-custom-element",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(myTemplate.content.cloneNode(true));
    }
  }
);
```

### Required type declarations

Include the following declaration for typescript to recognize .tpl files.

```typescript
declare module "*.tpl" {
  const template: HTMLTemplateElement;
  export default template;
}
```

## License

MIT. This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
