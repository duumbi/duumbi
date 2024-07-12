import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // analyzer(),
  ],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('antd/es/result')) return '@antd-result'
          if (id.includes('antd/es/input')) return '@antd-input'
          if (id.includes('antd/es/form')) return '@antd-form'
          if (id.includes('antd/es/menu')) return '@antd-menu'
          if (id.includes('antd')) return '@antd'
          if (
            id.includes('@ant-design') ||
            id.includes('@rc-component') ||
            id.includes('rc-select/es') ||
            id.includes('rc-field-form/es')
          ) {
              return '@antd-dc'
            }
          if (
            id.includes('react-router-dom') ||
            id.includes('react-dom') ||
            id.includes('@remix-run') ||
            id.includes('react-router')
          ) {
            return '@react-router';
          }
        },
      },
    },
  },
})
