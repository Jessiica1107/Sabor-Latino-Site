import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sabor-Latino-Site/',
  plugins: [react()],
  server: {
    proxy: {
      // Whenever you fetch an endpoint starting with /api, forward it to Express
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' before sending to Express
      },
    },
  },
}) 