import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: "src",
  plugins: [svgr(), react()],
  build: {
    outDir: "../public",
  },
})
