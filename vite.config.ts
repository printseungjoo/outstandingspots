import { copyFileSync } from 'fs'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function copyIndexTo404() {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'NEXT_PUBLIC_')
  return {
    base: '/',
    envPrefix: 'NEXT_PUBLIC_',
    define: {
      'process.env.NEXT_PUBLIC_API_URL': JSON.stringify(process.env.NEXT_PUBLIC_API_URL ?? env.NEXT_PUBLIC_API_URL ?? ''),
      'process.env.NEXT_PUBLIC_GUIDE_URL': JSON.stringify(process.env.NEXT_PUBLIC_GUIDE_URL ?? env.NEXT_PUBLIC_GUIDE_URL ?? '')
    },
    plugins: [react(), copyIndexTo404()],
    server: {
      allowedHosts: ['web-production-888c9.up.railway.app'],
      host: '0.0.0.0',
      port: 5173
    }
  }
})
