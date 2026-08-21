# ExpressBoda — новый сайт (Astro)

Каркас проекта: статический, мультиязычный (en/de/es/ru), заточен под SEO и скорость.

## Локальный запуск

```bash
npm install
npm run dev
```

Откроется на http://localhost:4321 — зайди на /en/, /de/, /es/, /ru/.

## Структура

- `src/pages/{en,de,es,ru}/` — страницы по языкам. Каждая языковая версия — отдельная папка = отдельные чистые URL (`/en/...`, `/ru/...`).
- `src/layouts/BaseLayout.astro` — общий каркас страницы (head, header, footer).
- `src/components/SEO.astro` — meta, canonical, hreflang, OG-теги. Подключается через BaseLayout, руками трогать не нужно на каждой странице.
- `src/i18n/ui.ts` — словарь интерфейсных строк (меню, кнопки). Контент статей сюда не идёт.
- `astro.config.mjs` — здесь задан `site` (домен), `trailingSlash: 'always'`, интеграции sitemap + tailwind.

## Как добавить новую страницу

1. Создать `.astro` файл в нужной языковой папке, например `src/pages/en/pricing.astro`
2. Использовать `BaseLayout` с `title`, `description`, `lang`
3. Продублировать в остальных 3 языках с переведённым `title`/`description`

## Деплой

1. Создать репозиторий на GitHub, запушить этот проект
2. В Vercel: **Add New → Project → Import Git Repository** → выбрать репозиторий
3. Vercel сам определит фреймворк (Astro) — ничего дополнительно настраивать не нужно
4. После первого деплоя: **Settings → Domains** → добавить `expressboda.com`, поменять DNS у регистратора домена на записи, которые покажет Vercel
5. **Только после того, как новый сайт полностью готов** — отключить one.com и завершить перенос. Между этим — обязательно подготовить карту 301-редиректов старый URL → новый URL (следующий этап проекта)

## Что ещё предстоит (следующие этапы)

- [ ] Наполнение контентом (тексты уже есть — задача разложить их по страницам)
- [ ] Самохостинг шрифтов (Open Sans + Playfair Display) — файлы в `public/fonts/`, раскомментировать `@font-face` в `src/styles/global.css`
- [ ] Schema.org разметка (Organization, FAQPage, Article, BreadcrumbList)
- [ ] Карта редиректов со старого one.com сайта
- [ ] Форма/интеграция оплаты (Redsys основной, Stripe дополнительный) — отдельный этап
