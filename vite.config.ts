import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'PA_WEB_')
  const { PA_WEB_SERVER_URL } = env
  if (!PA_WEB_SERVER_URL) {
    throw new Error('PA_WEB_SERVER_URL is not set')
  }
  if (typeof PA_WEB_SERVER_URL !== 'string') {
    throw new Error('PA_WEB_SERVER_URL is not a string')
  }

  return {
    envPrefix: 'PA_WEB_',
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: PA_WEB_SERVER_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          app: path.resolve(__dirname, 'app.html'),
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
      },
    },
  }
})
