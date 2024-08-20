import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      formats: ["es"],
      entry: "src/index.ts",
      name: "vite-plugin-html-template-element",
      fileName: (format) => `index.js`,
    },
  },
});
