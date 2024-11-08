import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
