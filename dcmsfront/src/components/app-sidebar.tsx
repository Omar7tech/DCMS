import {
  Sidebar,
  SidebarContent,
  SidebarFooter,

  SidebarHeader,
  SidebarMenu,

  SidebarMenuButton,
  SidebarMenuItem,


} from "@/components/ui/sidebar"
import { Home, Settings2Icon, User2, Users, Truck } from "lucide-react"
import { SidebarNavLink } from "./sidebar-nav-link"


export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="bg-green-700/50 text-white font-bold text-base shadow-md  transition-all" variant="default">
              <Truck className="h-5 w-5" />
              <span>DCMS</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>


      <SidebarContent >
        <SidebarMenu>
          <SidebarNavLink to="/admin" icon={Home} label="Dashboard" />
          <SidebarNavLink to="/admin/users" icon={Users} label="Users" />
        </SidebarMenu>
      </SidebarContent>


      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User2 /> Username
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarNavLink to="/admin/settings" icon={Settings2Icon} label="Settings" />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
