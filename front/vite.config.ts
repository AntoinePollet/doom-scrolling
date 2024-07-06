/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    // UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    }
  }
})
