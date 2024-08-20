import * as fs from "fs";

import { Plugin } from "vite";

function htmlTemplateElementPlugin(): Plugin {
  return {
    name: "vite-plugin-html-template-element",
    load(id) {
      if (id.endsWith(".tpl")) {
        const htmlContent = fs.readFileSync(id, "utf-8");
        const jsCode = `
const template = document.createElement('template');
template.innerHTML = \`${htmlContent.trim()}\`;
export default template;
        `;
        return {
          code: jsCode.trim(),
          map: null, // provide source map if needed
        };
      }
    },
  };
}

export default htmlTemplateElementPlugin;
