//@ts-check
import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: true,
    cssCodeSplit: true,
    target: 'es2015',
    rollupOptions: {
      treeshake: true,
    },
  },
})
