import { type CSSProperties } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"
import profileAvatar from "../../assets/profile-avatar.png"
import breadcrumbContactsIcon from "../../assets/breadcrumb-contacts.png"
import pinIcon from "../../assets/page-header/pin.png"
import historyIcon from "../../assets/page-header/history.png"

export default function PageHeader() {
  const { t } = useTranslation()

  return (
    <header className="page-header">
      <div className="page-header__row">
        <div className="page-header__status">
          <div className="page-header__meeting-pill">
            <time className="page-header__time" dateTime="00:00">
              12:00 am
            </time>
            <div className="page-header__meeting">
              <span className="page-header__meeting-dot" aria-hidden="true" />
              <div className="page-header__meeting-text">
                <span className="page-header__meeting-label">{t("topbar.nextMeeting")}</span>
                <span className="page-header__meeting-title">{t("topbar.meetingTitle")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-header__actions">
          <div className="page-header__actions-group">
            <Button variant="primary" size="sm" className="page-header__create-btn px-3">
              <i className="bi bi-plus-lg me-1" aria-hidden="true" />
              {t("topbar.create")}
            </Button>
          </div>
          <span className="page-header__actions-divider" aria-hidden="true" />
          <div className="page-header__actions-group">
            <button type="button" className="page-header__icon-btn" aria-label="Search">
              <i className="bi bi-search" />
            </button>
            <button type="button" className="page-header__icon-btn" aria-label="Share">
              <i className="bi bi-send" />
            </button>
          </div>
          <span className="page-header__actions-divider" aria-hidden="true" />
          <div className="page-header__actions-group">
            <button type="button" className="page-header__icon-btn" aria-label="Notifications">
              <i className="bi bi-bell" />
              <span className="page-header__badge">03</span>
            </button>
            <button type="button" className="page-header__icon-btn" aria-label="Briefcase">
              <i className="bi bi-briefcase" />
            </button>
          </div>
          <span className="page-header__actions-divider" aria-hidden="true" />
          <div className="page-header__actions-group">
            <div className="page-header__timezone">
              <i className="bi bi-globe2" aria-hidden="true" />
              <span>{t("topbar.timezone")}</span>
            </div>
            <img className="page-header__avatar" src={profileAvatar} alt="" width={32} height={32} />
          </div>
        </div>
      </div>

      <div className="page-header__row">
        <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
          <span
            className="page-header__breadcrumb-icon"
            style={{ "--icon-url": `url(${breadcrumbContactsIcon})` } as CSSProperties}
            aria-hidden="true"
          />
          <a className="page-header__breadcrumb-link" href="#contacts">
            {t("contactSettings.breadcrumbContacts")}
          </a>
          <svg
            className="page-header__breadcrumb-sep"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.56032 4.99173C6.7858 4.7489 7.16544 4.73484 7.40827 4.96032L10.2083 7.56032C10.3305 7.67385 10.4 7.83316 10.4 8C10.4 8.16684 10.3305 8.32615 10.2083 8.43967L7.40827 11.0397C7.16544 11.2652 6.7858 11.2511 6.56032 11.0083C6.33484 10.7654 6.3489 10.3858 6.59173 10.1603L8.91823 8L6.59173 5.83967C6.3489 5.61419 6.33484 5.23455 6.56032 4.99173Z"
              fill="#92A3B6"
            />
          </svg>
          <span className="page-header__breadcrumb-current">{t("profile.name")}</span>
        </nav>

        <div className="page-header__context-actions">
          <button type="button" className="page-header__follow-btn">
            {t("contactSettings.follow")}
          </button>
          <button type="button" className="page-header__icon-btn" aria-label="Pin">
            <span
              className="page-header__icon-btn-image"
              style={{ "--icon-url": `url(${pinIcon})` } as CSSProperties}
              aria-hidden="true"
            />
          </button>
          <button type="button" className="page-header__icon-btn" aria-label="History">
            <span
              className="page-header__icon-btn-image"
              style={{ "--icon-url": `url(${historyIcon})` } as CSSProperties}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
