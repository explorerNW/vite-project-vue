import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), viteCompression({ algorithm: 'gzip' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      maxWorkers: 4,
    },
    rollupOptions: {
      cache: true,
      perf: true,
      treeshake: {
        moduleSideEffects: 'no-external',
        preset: 'recommended',
      },
    },
  },
})
