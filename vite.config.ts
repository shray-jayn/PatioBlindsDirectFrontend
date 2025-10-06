import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    // Bind to all interfaces; if localhost fails on Windows, change to "0.0.0.0" or true
    host: "::",
    port: 8080,
    proxy: {
      // Anything starting with /api -> http://localhost:3001
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        // If your backend is mounted at / (not /api), uncomment rewrite:
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
