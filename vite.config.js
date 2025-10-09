import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/multi-layer-shadow-text-designer/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
