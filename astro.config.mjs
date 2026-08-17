import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// ВАЖНО: замени на реальный домен после переноса DNS
const SITE_URL = 'https://expressboda.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static', // чистый статический сайт, максимальная скорость
  trailingSlash: 'always', // единый формат URL — избегаем дублей /page и /page/ (была проблема на one.com)
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          de: 'de-DE',
          es: 'es-ES',
          ru: 'ru-RU',
        },
      },
    }),
    tailwind({
      applyBaseStyles: false, // свои базовые стили в global.css, без лишнего веса
    }),
  ],
  compressHTML: true,
});
