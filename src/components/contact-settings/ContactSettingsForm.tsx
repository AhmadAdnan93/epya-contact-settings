import { useState } from "react"
import { Form } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import iconGlobe from "../../assets/settings-section/globe.png"
import previewAvatar from "../../assets/settings-section/preview-avatar.png"
import saudiFlag from "../../assets/saudi-flag.png"
import contactAvatar1 from "../../assets/contacts/avatar-1.png"
import contactAvatar2 from "../../assets/contacts/avatar-2.png"

const contactAvatars = [contactAvatar1, contactAvatar2] as const

const fieldKeys = [
  "prefix1",
  "prefix2",
  "firstName",
  "secondName",
  "thirdName",
  "lastName",
  "suffix1",
  "suffix2",
  "nickname",
  "maidenName",
] as const

const defaultEnabled = new Set(["prefix1", "firstName", "secondName", "lastName", "suffix1"])

type PreviewMode = "above" | "full" | "box"

function PreviewNameDemo({ mode }: { mode: PreviewMode }) {
  const { t } = useTranslation()

  if (mode === "above") {
    return (
      <>
        <p className="preview-card__line preview-card__line--primary">{t("profile.name")}</p>
        <p className="preview-card__line preview-card__line--secondary">{t("profile.nameAr")}</p>
      </>
    )
  }

  if (mode === "full") {
    return (
      <>
        <p className="preview-card__line preview-card__line--titles">
          <span>{t("profile.nameArPrefix")}</span> <span>{t("profile.namePrefix")}</span>
        </p>
        <p className="preview-card__line">{t("profile.nameBody")}</p>
        <p className="preview-card__line preview-card__line--secondary">{t("profile.nameArBody")}</p>
      </>
    )
  }

  return (
    <>
      <p className="preview-card__line preview-card__line--box">
        <span className="preview-card__pill">{t("profile.namePrefix")}</span>
        <span>{t("profile.nameBody")}</span>
      </p>
      <p className="preview-card__line preview-card__line--box">
        <span className="preview-card__pill">{t("profile.nameArPrefix")}</span>
        <span>{t("profile.nameArBody")}</span>
      </p>
    </>
  )
}

export default function ContactSettingsForm() {
  const { t } = useTranslation()
  const [customEnabled, setCustomEnabled] = useState(true)
  const [enabledFields, setEnabledFields] = useState(defaultEnabled)
  const [previewMode, setPreviewMode] = useState<PreviewMode>("above")

  const toggleField = (key: string) => {
    setEnabledFields((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <>
      <div className="settings-panel">
        <section className="settings-section">
          <div className="settings-section__row">
            <div className="settings-section__info">
              <span className="settings-section__icon settings-section__icon--lock" aria-hidden="true" />
              <div className="settings-section__text">
                <h2 className="settings-section__title">{t("contactSettings.privacySettings")}</h2>
                <p className="settings-section__subtitle">{t("contactSettings.privacySettingsHint")}</p>
              </div>
            </div>
            <div className="settings-section__control">
              <div className="privacy-status">
                <div className="privacy-status__icon">
                  <img src={iconGlobe} alt="" width={20} height={20} />
                </div>
                <div className="privacy-status__text">
                  <p className="privacy-status__label">{t("contactSettings.public")}</p>
                  <p className="privacy-status__desc">{t("contactSettings.publicDescription")}</p>
                </div>
              </div>
            </div>
            <button type="button" className="privacy-row__change">
              {t("contactSettings.change")}
            </button>
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-section__row settings-section__row--field-config">
            <div className="settings-section__info">
              <span className="settings-section__icon settings-section__icon--field-config" aria-hidden="true" />
              <div className="settings-section__text">
                <h2 className="settings-section__title">{t("contactSettings.fieldConfiguration")}</h2>
                <p className="settings-section__subtitle">
                  {t("contactSettings.fieldConfigurationHint")}
                </p>
              </div>
            </div>
            <div className="field-config__content">
              <div className="field-config__toggle-row">
                <Form.Check
                  type="switch"
                  id="custom-toggle"
                  checked={customEnabled}
                  onChange={(e) => setCustomEnabled(e.target.checked)}
                />
                <span className="field-config__status-label">{t("contactSettings.custom")}</span>
              </div>
              <div className="field-config__meta-row">
                <p className="field-config__status-desc">{t("contactSettings.customDescription")}</p>
                <p className="field-config__count">
                  {t("contactSettings.enabledCount", {
                    count: enabledFields.size,
                    total: fieldKeys.length,
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="field-config__grid">
            {fieldKeys.map((key) => (
              <Form.Check
                key={key}
                type="checkbox"
                id={`field-${key}`}
                label={t(`fields.${key}`)}
                checked={enabledFields.has(key)}
                disabled={!customEnabled}
                onChange={() => toggleField(key)}
              />
            ))}
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-section__row settings-section__row--preview">
            <div className="settings-section__info">
              <span className="settings-section__icon settings-section__icon--view-preview" aria-hidden="true" />
              <div className="settings-section__text">
                <h2 className="settings-section__title">{t("contactSettings.viewPreview")}</h2>
                <p className="settings-section__subtitle">{t("contactSettings.viewPreviewHint")}</p>
              </div>
            </div>
            <div className="preview-options">
              {(
                [
                  { id: "above", labelKey: "aboveName" },
                  { id: "full", labelKey: "fullBeforeName" },
                  { id: "box", labelKey: "inBox" },
                ] as const
              ).map((option) => (
                <div
                  key={option.id}
                  className={`preview-card${previewMode === option.id ? " preview-card--selected" : ""}`}
                  onClick={() => setPreviewMode(option.id)}
                  onKeyDown={(e) => e.key === "Enter" && setPreviewMode(option.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="preview-card__surface">
                    <div className="preview-card__main">
                      <span className="preview-card__avatar">
                        <img src={previewAvatar} alt="" width={20} height={20} />
                      </span>
                      <div className="preview-card__text">
                        <PreviewNameDemo mode={option.id} />
                        <div className="preview-card__skeleton" aria-hidden="true">
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <label className="preview-card__radio" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="radio"
                        name="preview-mode"
                        checked={previewMode === option.id}
                        onChange={() => setPreviewMode(option.id)}
                      />
                      <span className="visually-hidden">{t(`contactSettings.${option.labelKey}`)}</span>
                    </label>
                  </div>
                  <p className="preview-card__label">{t(`contactSettings.${option.labelKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <ContactsTable />
    </>
  )
}

function ContactsTable() {
  const { t } = useTranslation()
  const rows = [1, 2]

  return (
    <div className="contacts-table-wrap">
      <table className="contacts-table table mb-0">
        <thead>
          <tr>
            <th>{t("contactSettings.contact")}</th>
            <th>{t("contactSettings.position")}</th>
            <th>{t("contactSettings.company")}</th>
            <th>{t("contactSettings.nationality")}</th>
            <th>{t("contactSettings.email")}</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <td data-label={t("contactSettings.contact")}>
                <div className="contact-cell">
                  <img
                    className="contact-cell__avatar"
                    src={contactAvatars[row - 1]}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <p className="contact-cell__name">{t("contactSettings.contactName")}</p>
                    <p className="contact-cell__name-ar">{t("contactSettings.contactNameAr")}</p>
                  </div>
                </div>
              </td>
              <td data-label={t("contactSettings.position")}>{t("contactSettings.operationsManager")}</td>
              <td data-label={t("contactSettings.company")}>{t("contactSettings.microsoft")}</td>
              <td data-label={t("contactSettings.nationality")}>
                <span className="nationality-cell">
                  <img className="nationality-cell__flag" src={saudiFlag} alt="" width={20} height={14} />
                  {t("contactSettings.saudiArabia")}
                </span>
              </td>
              <td className="contacts-table__email" data-label={t("contactSettings.email")}>
                Sara@Email.Com
              </td>
              <td className="contacts-table__actions">
                <button type="button" className="contacts-table__more-btn" aria-label={t("profile.moreOptions")}>
                  <i className="bi bi-three-dots" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
