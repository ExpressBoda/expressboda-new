import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://expressboda.com',

  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
