import { useTranslation } from "react-i18next"
import { setDocumentDirection } from "../i18n"
import ContactSettingsHeader from "../components/contact-settings/ContactSettingsHeader"
import ContactSettingsForm from "../components/contact-settings/ContactSettingsForm"

export default function ContactSettingsPage() {
  const { i18n: i18nInstance } = useTranslation()

  const switchLang = (lang: "en" | "ar") => {
    void i18nInstance.changeLanguage(lang)
    setDocumentDirection(lang)
  }

  return (
    <div className="contact-settings">
      <ContactSettingsHeader />
      <ContactSettingsForm />

      <div className="lang-switcher" role="group" aria-label="Language">
        <button
          type="button"
          className={`lang-switcher__btn${i18nInstance.language === "en" ? " lang-switcher__btn--active" : ""}`}
          onClick={() => switchLang("en")}
        >
          EN
        </button>
        <button
          type="button"
          className={`lang-switcher__btn${i18nInstance.language === "ar" ? " lang-switcher__btn--active" : ""}`}
          onClick={() => switchLang("ar")}
        >
          AR
        </button>
      </div>
    </div>
  )
}
