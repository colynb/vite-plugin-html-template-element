import { defineConfig } from "vite";
import htmlTemplateElementPlugin from "./src/index";

export default defineConfig({
  plugins: [htmlTemplateElementPlugin()],
});
