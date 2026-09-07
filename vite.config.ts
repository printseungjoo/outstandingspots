import { copyFileSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function copyIndexTo404() {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), copyIndexTo404()],
  server: {
    allowedHosts: ['web-production-888c9.up.railway.app'],
    host: '0.0.0.0',
    port: 5173
  }
})
