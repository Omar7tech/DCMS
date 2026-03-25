"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Home, Users, Car, Settings2Icon, Truck } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@dcms.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "DCMS",
      logo: <Truck />,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: <Home />,
      isActive: true,
      items: [],
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: <Users />,
      items: [],
    },
    {
      title: "Logistics",
      url: "#",
      icon: <Car />,
      items: [
        {
          title: "Vehicles",
          url: "/admin/vehicles",
        },
        {
          title: "Drivers",
          url: "/admin/drivers",
        },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: <Settings2Icon />,
      items: [],
    },
  ],
  projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
