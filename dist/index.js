import fs from "fs";
export default function htmlTemplateElementPlugin() {
    return {
        name: "vite-plugin-html-template",
        transform(code, id) {
            if (id.endsWith(".html")) {
                const htmlContent = fs.readFileSync(id, "utf-8");
                const jsCode = `
          const template = document.createElement('template');
          template.innerHTML = \`${htmlContent}\`;
          export default template;
        `;
                return {
                    code: jsCode,
                    map: null, // provide source map if needed
                };
            }
        },
    };
}
