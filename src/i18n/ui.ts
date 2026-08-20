import en from '../data/en.json';
import de from '../data/de.json';
import es from '../data/es.json';
import ru from '../data/ru.json';

export const languages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  ru: 'Русский',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en,
  de,
  es,
  ru,
} as const;