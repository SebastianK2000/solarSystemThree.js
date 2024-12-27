import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',  // Ustaw folder źródłowy na 'src'
  build: {
    outDir: '../docs',  // Folder, do którego trafią zbudowane pliki
  },
});
