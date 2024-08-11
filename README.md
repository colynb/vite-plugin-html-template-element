# vite-plugin-html-template-element

A Vite plugin to import HTML files as `HTMLTemplateElement`.

## Installation

```bash
npm install vite-plugin-html-template-element
```

## Usage

Add the plugin to your Vite configuration:

```javascript
import { defineConfig } from "vite";
import htmlTemplatePlugin from "vite-plugin-html-template-element";

export default defineConfig({
  plugins: [htmlTemplateElementPlugin()],
});
```

Then you can import HTML files as templates:

```
import template from './template.html';

document.body.appendChild(template.content.cloneNode(true));
```

## License

MIT. This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
