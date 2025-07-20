import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import static from '@astrojs/static';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  adapter: static(),
  experimental: {
    inlineStyles: 'always'
  }
});
