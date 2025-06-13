import { initReactI18next } from 'react-i18next';
import { createCookie } from 'react-router';
import { unstable_createI18nextMiddleware } from 'remix-i18next/middleware';
import en from '../locales/en';
import es from '../locales/es';
import pt from '../locales/pt';

export const localeCookie = createCookie('lng', {
  path: '/',
  sameSite: 'lax',
  secure: import.meta.env.PROD,
  httpOnly: true,
});

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
};

export const [i18nextMiddleware, getLocale, getInstance] =
  unstable_createI18nextMiddleware({
    detection: {
      supportedLanguages: ['pt', 'es', 'en'],
      fallbackLanguage: 'pt',
      cookie: localeCookie,
      order: ['cookie', 'header'],
    },
    i18next: {
      resources,
    },
    plugins: [initReactI18next],
  });

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en;
    };
  }
}
