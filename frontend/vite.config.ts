import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { createProxy } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/": {
        target: "http://localhost:5001/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
