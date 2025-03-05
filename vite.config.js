import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Đảm bảo Vercel nhận diện đúng route
  server: {
    historyApiFallback: true, // Để xử lý các route trong SPA
  },
});
