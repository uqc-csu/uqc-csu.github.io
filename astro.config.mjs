import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://en.uqc-csu.com',
  output: 'static',
  redirects: {
    '/research/': '/#research',
    '/news/': '/#news',
    '/publications/': '/#publications',
    '/people/': '/#people',
    '/contact/': '/#contact',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
