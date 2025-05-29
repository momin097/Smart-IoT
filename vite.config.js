import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // เปิดให้เข้าถึงจากเครื่องอื่น
    port: 5173,       // พอร์ตที่ใช้งาน
    proxy: {
      '/api': 'http://localhost:3000',  // ส่ง request /api ไป backend port 3000
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})