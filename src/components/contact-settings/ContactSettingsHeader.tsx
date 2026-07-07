import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"

const stats = [
  {
    key: "totalEvents",
    value: "22",
    iconModifier: "stat-card__icon-mask--total-events",
    unitKey: "totalEventsUnit",
    featured: false,
  },
  {
    key: "sentEmails",
    value: "12",
    iconModifier: "stat-card__icon-mask--email",
    unitKey: "sentEmailsUnit",
    featured: false,
  },
  {
    key: "sentSms",
    value: "44",
    iconModifier: "stat-card__icon-mask--sms",
    unitKey: "sentSmsUnit",
    featured: true,
    iconImg: "sms",
  },
  {
    key: "request",
    value: "44",
    iconModifier: "stat-card__icon-mask--request",
    unitKey: "requestUnit",
    featured: true,
    iconImg: "request",
  },
] as const

export default function ContactSettingsHeader() {
  const { t } = useTranslation()

  return (
    <>
      <header className="contact-settings__header">
        <div>
          <h1 className="contact-settings__title">{t("contactSettings.title")}</h1>
          <p className="contact-settings__subtitle">{t("contactSettings.subtitle")}</p>
        </div>
        <div className="contact-settings__actions">
          <button type="button" className="contact-settings__reset">
            {t("contactSettings.reset")}
          </button>
          <Button
            variant="outline-secondary"
            size="sm"
            className="contact-settings__cancel-btn rounded-2 px-3"
          >
            {t("contactSettings.cancel")}
          </Button>
          <Button variant="primary" size="sm" className="rounded-2 px-3">
            {t("contactSettings.save")}
          </Button>
        </div>
      </header>

      <div className="stats-row">
        {stats.map((stat) => (
          <article key={stat.key} className="stat-card">
            <div className="stat-card__content">
              <p className="stat-card__label">{t(`contactSettings.${stat.key}`)}</p>
              <p className="stat-card__value">{stat.value}</p>
              <p className="stat-card__unit">{t(`contactSettings.${stat.unitKey}`)}</p>
            </div>
            <div
              className={`stat-card__icon${stat.featured ? " stat-card__icon--featured" : ""}`}
            >
              {stat.featured ? (
                <span
                  className={`stat-card__icon-img stat-card__icon-img--${stat.iconImg}`}
                  aria-hidden="true"
                />
              ) : (
                <span className={`stat-card__icon-mask ${stat.iconModifier}`} aria-hidden="true" />
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
