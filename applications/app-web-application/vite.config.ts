import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // analyzer(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173
  },
})
