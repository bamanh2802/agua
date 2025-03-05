import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Lắng nghe từ tất cả IP
    port: 80, // Chạy trên cổng 80
    strictPort: true, // Đảm bảo dùng đúng cổng
    cors: true, // Cho phép truy cập từ các nguồn khác
  },
  preview: {
    host: '0.0.0.0',
    port: 80
  }
});
