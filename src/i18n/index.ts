import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en.json"
import ar from "./locales/ar.json"

const resources = {
  en: { translation: en },
  ar: { translation: ar },
}

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

export default i18n

export function setDocumentDirection(lang: string) {
  const dir = lang === "ar" ? "rtl" : "ltr"
  document.documentElement.lang = lang
  document.documentElement.dir = dir
}
