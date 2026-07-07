import { Fragment, type CSSProperties } from "react"
import { useTranslation } from "react-i18next"
import profileAvatar from "../../assets/profile-avatar.png"
import jordanFlag from "../../assets/jordan-flag.png"
import iconUserSettings from "../../assets/profile-actions/user-settings.png"
import iconSettings from "../../assets/profile-actions/settings.png"
import iconDirections from "../../assets/profile-actions/directions.png"
import iconChat from "../../assets/profile-actions/chat.png"
import iconLock from "../../assets/profile-actions/lock.png"
import iconPersonalInfo from "../../assets/profile-nav/personal-info.png"
import iconDashboard from "../../assets/profile-nav/dashboard.png"
import iconDocuments from "../../assets/profile-nav/documents.png"
import iconRelatedEvents from "../../assets/profile-nav/related-events.png"
import iconSecurityCheck from "../../assets/profile-nav/security-check.png"
import iconFamilyTree from "../../assets/profile-nav/family-tree.png"

const actionItems = [
  { id: "user", icon: iconUserSettings, label: "User", variant: "default" },
  { id: "settings", icon: iconSettings, label: "Settings", variant: "active" },
  { id: "directions", icon: iconDirections, label: "Notes", variant: "default", dividerBefore: true },
  { id: "chat", icon: iconChat, label: "Chat", variant: "default" },
  { id: "lock", icon: iconLock, label: "Lock", variant: "purple", dividerBefore: true },
] as const

const navKeys = [
  { key: "personalInfo", icon: iconPersonalInfo, active: true },
  { key: "dashboard", icon: iconDashboard },
  { key: "documents", icon: iconDocuments },
  { key: "relatedEvents", icon: iconRelatedEvents },
  { key: "securityCheck", icon: iconSecurityCheck },
  { key: "familyTree", icon: iconFamilyTree },
] as const

export default function ProfileSidebar() {
  const { t } = useTranslation()

  return (
    <aside className="profile-sidebar">
      <div className="profile-card">
        <button type="button" className="profile-card__menu" aria-label={t("profile.moreOptions")}>
          <i className="bi bi-three-dots" aria-hidden="true" />
        </button>
        <img
          className="profile-card__avatar"
          src={profileAvatar}
          alt=""
          width={80}
          height={80}
        />
        <div className="profile-card__name-row">
          <img className="profile-card__flag" src={jordanFlag} alt="" width={20} height={14} />
          <p className="profile-card__name">{t("profile.name")}</p>
        </div>
        <p className="profile-card__name-ar">{t("profile.nameAr")}</p>
        <p className="profile-card__title">{t("profile.title")}</p>

        <div className="profile-card__tags">
          <span className="profile-tag profile-tag--gold">{t("profile.vipTag")}</span>
          <span className="profile-tag profile-tag--purple">{t("profile.ceoTag")}</span>
        </div>

        <div className="profile-card__actions">
          {actionItems.map((item) => (
            <Fragment key={item.id}>
              {"dividerBefore" in item && item.dividerBefore && (
                <div className="profile-card__actions-divider" aria-hidden="true" />
              )}
              <button
                type="button"
                className={`profile-action-btn${
                  item.variant === "active"
                    ? " profile-action-btn--active"
                    : item.variant === "purple"
                      ? " profile-action-btn--purple"
                      : ""
                }`}
                aria-label={item.label}
              >
                <span
                  className="profile-action-btn__icon"
                  style={{ "--icon-url": `url(${item.icon})` } as CSSProperties}
                  aria-hidden="true"
                />
              </button>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="profile-score-card">
        <div className="profile-score-card__ring" aria-hidden="true">
          <svg className="profile-score-card__ring-svg" viewBox="0 0 72 72" fill="none">
            <circle
              className="profile-score-card__segment profile-score-card__segment--track"
              cx="36"
              cy="36"
              r="28"
              pathLength="100"
            />
            <circle
              className="profile-score-card__segment profile-score-card__segment--active"
              cx="36"
              cy="36"
              r="28"
              pathLength="100"
              strokeDasharray="50 50"
              strokeDashoffset="12.5"
              transform="rotate(-112 36 36)"
            />
          </svg>
          <span className="profile-score-card__value">50%</span>
        </div>
        <div className="profile-score-card__content">
          <p className="profile-score-card__title">{t("profile.completeness")}</p>
          <p className="profile-score-card__subtitle">{t("profile.completenessHint")}</p>
        </div>
      </div>

      <ul className="profile-nav">
        {navKeys.map((item) => (
          <li key={item.key} className="profile-nav__item">
            <button
              type="button"
              className={`profile-nav__link${"active" in item && item.active ? " profile-nav__link--active" : ""}`}
            >
              <span className="profile-nav__icon">
                <span
                  className="profile-nav__icon-image"
                  style={{ "--icon-url": `url(${item.icon})` } as CSSProperties}
                  aria-hidden="true"
                />
              </span>
              {t(`nav.${item.key}`)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
