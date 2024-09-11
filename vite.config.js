import { defineConfig } from 'vite'

export default defineConfig({
  base: '/wolgc/', // Must match repository name.
  build: {
    outDir: 'docs'
  }
})
