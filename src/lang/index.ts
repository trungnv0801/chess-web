import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './vi'
import en from './en'
import { LANG } from '@/libs'

const savedLang = localStorage.getItem(LANG) || 'en'

i18n.use(initReactI18next).init({
  debug: false,
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: en
    },
    vi: {
      translation: vi
    }
  }
})

export default i18n
