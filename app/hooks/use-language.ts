import { useState, useEffect } from 'react';
import data from '~/data/data.json';

export type Language = 'pt-BR' | 'en-US' | 'es-ES';

type TranslationValue = {
  [key in Language]?: string;
};

type TranslationObject = {
  [key: string]: TranslationValue | TranslationObject | any;
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pt-BR');

  useEffect(() => {
    // Get language from localStorage or default to pt-BR
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string) => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value: any = data;

    // Traverse the object using the keys
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return the key if the path doesn't exist
      }
    }

    // If the value is an object with language keys, return the translation
    if (value && typeof value === 'object' && language in value) {
      return value[language];
    }

    // If the value is an array, map through it and translate each item
    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === 'object' && item !== null) {
          const translatedItem: Record<string, any> = {};
          for (const [k, v] of Object.entries(item)) {
            if (typeof v === 'object' && v !== null && language in v) {
              translatedItem[k] = (v as TranslationValue)[language];
            } else {
              translatedItem[k] = v;
            }
          }
          return translatedItem;
        }
        return item;
      });
    }

    return value || key; // Return the value or the key if not found
  };

  return {
    language,
    changeLanguage,
    t,
  };
}
