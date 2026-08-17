import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Строит ссылки на альтернативные языковые версии текущей страницы для hreflang
export function getAlternateLinks(url: URL): { lang: Lang; href: string }[] {
  const path = url.pathname.split('/').slice(2).join('/'); // убираем /xx/ префикс
  return (Object.keys(ui) as Lang[]).map((lang) => ({
    lang,
    href: `/${lang}/${path}`,
  }));
}
