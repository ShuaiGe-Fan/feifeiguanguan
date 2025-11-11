import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 可以在这里定义 Less 变量
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5200
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

