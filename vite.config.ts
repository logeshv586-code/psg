import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isWidgetBuild = process.env.BUILD_WIDGET === "true";

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    preview: {
      host: "::",
      port: 8080,
      strictPort: false,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: isWidgetBuild
      ? {
        lib: {
          entry: path.resolve(__dirname, "src/chatbot-main.tsx"),
          name: "PSGChatbot",
          fileName: () => "chatbot.js",
          formats: ["iife"],
        },
        rollupOptions: {
          external: [],
        },
      }
      : undefined,
  };
});
