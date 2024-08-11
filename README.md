# vite-plugin-html-template-element

A Vite plugin to import HTML files as `HTMLTemplateElement`.

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
import template from "./template.html";

document.body.appendChild(template.content.cloneNode(true));
```

### Required type declarations

A note on type declarations. For typescript to recognize the import of `../.html` files, I included a declaration in the src folder and attempted to include it in the bundle so that you do not have to. However, I can't seem to get that to work. If this is an issue for you, you will have to add the following to your types yourself. If you know how to fix this, please let me know or if you want, submit a PR. Thanks!

```typescript
declare module "*.html" {
  const template: HTMLTemplateElement;
  export default template;
}
```

## License

MIT. This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
