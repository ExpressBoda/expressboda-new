import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://expressboda-new.vercel.app',

  output: 'static',
  integrations: [tailwind()],
});