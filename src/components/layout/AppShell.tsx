import IconSidebar from "./IconSidebar"
import PageHeader from "./PageHeader"
import ProfileSidebar from "./ProfileSidebar"

type AppShellProps = {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <div className="app-body">
        <IconSidebar />
        <div className="app-workspace">
          <PageHeader />
          <div className="app-workspace__content">
            <ProfileSidebar />
            <main className="app-main">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}