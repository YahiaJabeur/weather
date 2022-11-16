import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from './de.json';
import en from './en.json';

const resources = {
  en,
  de,
} as const;

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'en',
  lng: 'en',
});

export default i18n;
