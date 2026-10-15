import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://en.uqc-csu.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
