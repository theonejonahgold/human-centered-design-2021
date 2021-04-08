//@ts-check
import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  esbuild: {
    minify: true,
    sourcemap: 'external',
    format: 'esm',
    target: 'es2017',
    treeShaking: true,
  },
})
