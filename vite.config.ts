import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    allowedHosts: ['web-production-888c9.up.railway.app'],
    host: '0.0.0.0',
    port: 8080
  }
})
