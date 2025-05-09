import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Le decimos a Vite que pruebe también la extensión .jsx
    extensions: [".mjs", ".js", ".jsx", ".json"],
  },
});
