import React from "react"
import { Home, LayoutDashboard, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import UserMenu from "./UserMenu"

const items = [
  //dummy data, nanti ambil dari backend
  {
    title: "Dashboard",
    url: "/admin", // ini ke Index.tsx (Dashboard)
    icon: LayoutDashboard,
  },
  {
    title: "Home",
    url: "/admin/home", // ini ke Home.tsx (CRUD Home)
    icon: Home,
  },
  {
    title: "Settings",
    url: "/admin/settings", // nanti bisa kamu tambahin page sendiri
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto border-t p-4">
          <UserMenu />
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
