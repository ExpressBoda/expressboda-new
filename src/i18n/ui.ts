// Единый словарь UI-строк по языкам.
// Контент статей/страниц (Guide и т.д.) сюда НЕ идёт — только интерфейс (шапка, футер, кнопки).
// Тексты страниц наполняем на следующем этапе.

export const languages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  ru: 'Русский',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.guide': 'Guide',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.main': 'Get Started',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.guide': 'Leitfaden',
    'nav.pricing': 'Preise',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'cta.main': 'Jetzt starten',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.guide': 'Guía',
    'nav.pricing': 'Precios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'cta.main': 'Empezar',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.guide': 'Гид',
    'nav.pricing': 'Цены',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'cta.main': 'Начать',
  },
} as const;
