import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: "https://your-backend-url.com", // Replace with your backend URL
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
