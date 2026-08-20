import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const translationTable = ui[lang] || ui[defaultLang];
    return (translationTable as Record<string, string>)[key] || ui[defaultLang][key as keyof typeof ui[typeof defaultLang]] || key;
  };
}

// Строит ссылки на альтернативные языковые версии текущей страницы для hreflang
export function getAlternateLinks(url: URL): { lang: Lang; href: string }[] {
  const segments = url.pathname.split('/');
  // Безопасно убираем языковой префикс, если он есть
  const path = (segments[1] in ui) ? segments.slice(2).join('/') : segments.slice(1).join('/');
  return (Object.keys(ui) as Lang[]).map((lang) => ({
    lang,
    href: `/${lang}/${path}`,
  }));
}