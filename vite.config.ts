import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/divine-reading-oasis/',  // This is crucial
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    pluginReact(),  // Changed from react() to pluginReact()
    componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
