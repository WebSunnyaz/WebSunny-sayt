import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80, // keyfiyyət faizlə (80 yaxşı balansdır)
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        lossless: false, // true olsa keyfiyyət düşmür, amma fayl böyük ola bilər
        quality: 80,
      },
    }),
  ],
});

