import type { CSSProperties } from "react"
import logoIcon from "../../assets/logo-icon.png"
import iconHome from "../../assets/sidebar/home.png"
import iconDashboard from "../../assets/sidebar/dashboard.png"
import iconDocuments from "../../assets/sidebar/documents.png"
import iconEmail from "../../assets/sidebar/email.png"
import iconContacts from "../../assets/sidebar/contacts.png"
import iconEngineer from "../../assets/sidebar/engineer.png"
import iconPurchaseOrders from "../../assets/sidebar/purchase-orders.png"

const navGroups = [
  [
    { id: "home", icon: iconHome, label: "Home", active: false },
    { id: "dashboard", icon: iconDashboard, label: "Dashboard", active: false },
    { id: "documents", icon: iconDocuments, label: "Documents", active: false },
    { id: "email", icon: iconEmail, label: "Messages", active: false },
  ],
  [
    { id: "contacts", icon: iconContacts, label: "Contacts", active: true },
    { id: "engineer", icon: iconEngineer, label: "Users", active: false },
    { id: "purchase-orders", icon: iconPurchaseOrders, label: "Billing", active: false },
  ],
] as const

export default function IconSidebar() {
  return (
    <nav className="icon-sidebar" aria-label="Primary navigation">
      <img className="icon-sidebar__logo" src={logoIcon} alt="Epya" width={32} height={32} />

      {navGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="icon-sidebar__group">
          {group.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`icon-sidebar__item${item.active ? " icon-sidebar__item--active" : ""}`}
              aria-label={item.label}
              aria-current={item.active ? "page" : undefined}
            >
              <span
                className="icon-sidebar__icon"
                style={{ "--icon-url": `url(${item.icon})` } as CSSProperties}
                aria-hidden="true"
              />
            </button>
          ))}
          {groupIndex < navGroups.length - 1 && <div className="icon-sidebar__divider" aria-hidden="true" />}
        </div>
      ))}

      <div className="icon-sidebar__divider icon-sidebar__divider--bottom" aria-hidden="true" />
    </nav>
  )
}
