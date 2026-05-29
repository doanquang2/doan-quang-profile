import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/doan-quang-profile/', // Thêm dòng này vào (nhớ có 2 dấu gạch chéo)
})
