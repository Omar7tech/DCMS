import { Link, useLocation } from "react-router"
import type { LucideIcon } from "lucide-react"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

interface SidebarNavLinkProps {
  to: string
  icon: LucideIcon
  label: string
}

export function SidebarNavLink({ to, icon: Icon, label }: SidebarNavLinkProps) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link to={to}>
          <Icon />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
