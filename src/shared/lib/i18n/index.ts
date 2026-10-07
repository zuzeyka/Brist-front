import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uk from './locales/uk.json';
import en from './locales/en.json';

// Same persistence pattern as the dark/light theme in main.tsx: a plain
// localStorage key, read once at startup, defaulting to Ukrainian.
const STORAGE_KEY = 'language';

export const getStoredLanguage = (): string => {
    try {
        return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'uk';
    } catch {
        return 'uk';
    }
};

export const setStoredLanguage = (language: string) => {
    i18n.changeLanguage(language);
    try {
        localStorage.setItem(STORAGE_KEY, language);
    } catch {
        // Storage unavailable; the language still applies for this session.
    }
};

i18n.use(initReactI18next).init({
    resources: {
        uk: { translation: uk },
        en: { translation: en },
    },
    lng: getStoredLanguage(),
    fallbackLng: 'uk',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
