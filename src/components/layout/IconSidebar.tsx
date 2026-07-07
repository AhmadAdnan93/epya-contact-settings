import logoIcon from "../../assets/logo-icon.png"

const navGroups = [
  [
    { id: "home", iconModifier: "icon-sidebar__icon--home", label: "Home", active: false },
    { id: "dashboard", iconModifier: "icon-sidebar__icon--dashboard", label: "Dashboard", active: false },
    { id: "documents", iconModifier: "icon-sidebar__icon--documents", label: "Documents", active: false },
    { id: "email", iconModifier: "icon-sidebar__icon--email", label: "Messages", active: false },
  ],
  [
    { id: "contacts", iconModifier: "icon-sidebar__icon--contacts", label: "Contacts", active: true },
    { id: "engineer", iconModifier: "icon-sidebar__icon--engineer", label: "Users", active: false },
    {
      id: "purchase-orders",
      iconModifier: "icon-sidebar__icon--purchase-orders",
      label: "Billing",
      active: false,
    },
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
                className={`icon-sidebar__icon ${item.iconModifier}`}
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
