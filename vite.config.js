import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Use '/ZYNDICO/' for production builds (GitHub Pages), but '/' for local dev
  base: command === 'build' ? '/ZYNDICO/' : '/',
}))