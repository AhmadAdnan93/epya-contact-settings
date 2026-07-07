import { type CSSProperties } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"
import iconTotalEvents from "../../assets/stats/total-events.png"
import iconEmail from "../../assets/stats/email.png"
import iconSms from "../../assets/stats/sms.png"
import iconRequest from "../../assets/stats/request.png"

const stats = [
  { key: "totalEvents", value: "22", icon: iconTotalEvents, unitKey: "totalEventsUnit", featured: false },
  { key: "sentEmails", value: "12", icon: iconEmail, unitKey: "sentEmailsUnit", featured: false },
  { key: "sentSms", value: "44", icon: iconSms, unitKey: "sentSmsUnit", featured: true },
  { key: "request", value: "44", icon: iconRequest, unitKey: "requestUnit", featured: true },
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
                <img className="stat-card__icon-img" src={stat.icon} alt="" width={48} height={48} />
              ) : (
                <span
                  className="stat-card__icon-mask"
                  style={{ "--icon-url": `url(${stat.icon})` } as CSSProperties}
                  aria-hidden="true"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
