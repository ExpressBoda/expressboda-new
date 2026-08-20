import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Вставьте ваш домен
  site: 'https://ваш-домен.vercel.app',

  output: 'static',
  integrations: [tailwind()],
});