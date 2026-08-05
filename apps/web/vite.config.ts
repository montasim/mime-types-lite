import path from 'node:path';
import { fileURLToPath } from 'node:url';

import netlify from '@netlify/vite-plugin-tanstack-start';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      sitemap: {
        enabled: true,
        host: 'https://mime-types-lite-demo.netlify.app',
      },
    }),
    netlify(),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(currentDirectory, 'src'),
    },
  },
});
