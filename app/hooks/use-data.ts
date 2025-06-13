import { useTranslation } from 'react-i18next';
import data from '~/data/data.json';

export type Language = 'pt' | 'en' | 'es';
export function useData() {
  const { i18n } = useTranslation();

  const getData = (key: string) => {
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
    if (value && typeof value === 'object' && i18n.language in value) {
      return value[i18n.language];
    }

    // If the value is an array, map through it and translate each item
    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === 'object' && item !== null) {
          const translatedItem: Record<string, any> = {};
          for (const [k, v] of Object.entries(item)) {
            if (typeof v === 'object' && v !== null && i18n.language in v) {
              translatedItem[k] = v[i18n.language as keyof typeof v];
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
    getData,
  };
}
