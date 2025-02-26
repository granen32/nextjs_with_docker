import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import modalKo from './locales/ko/modal.json';
import modalEn from './locales/en/modal.json';

const resources = {
  ko: {
    modal: modalKo
  },
  en: {
    modal: modalEn
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'modal',
    fallbackLng: 'ko',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 