import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',  // ✅ IMPORTANT: relative path for Firebase
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
