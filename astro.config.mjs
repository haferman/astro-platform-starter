import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  adapter: netlify(),
  experimental: {
    inlineStyles: 'always'
  }
});
