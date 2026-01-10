import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    envPrefix: 'PA_CLIENT_',
    plugins: [react()],
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    resolve: {
      alias: {
        '#apis': path.resolve(__dirname, './src/apis'),
        '#components': path.resolve(__dirname, './src/components'),
        '#hooks': path.resolve(__dirname, './src/hooks'),
        '#types': path.resolve(__dirname, './src/types'),
        '#utils': path.resolve(__dirname, './src/utils'),
        '#assets': path.resolve(__dirname, './src/assets'),
        '#config': path.resolve(__dirname, './src/config'),
        '#lib': path.resolve(__dirname, './src/lib'),
        '#models': path.resolve(__dirname, './src/models'),
      },
    },
  }
})
