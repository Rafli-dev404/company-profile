import React from "react"
import {
  LayoutDashboard,
  Settings,
  Database,
  Shield,
  ChevronDown,
} from "lucide-react"

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

const sidebarItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
    type: "single",
  },
  {
    title: "Data Master",
    icon: Database,
    type: "dropdown",
    children: [
      { title: "Service", url: "/admin/service" },
      { title: "Team", url: "/admin/team" },
      { title: "Partner", url: "/admin/partner" },
      { title: "Client", url: "/admin/client" },
    ],
  },
  {
    title: "Admin Panel",
    icon: Settings,
    type: "dropdown",
    children: [
      { title: "Home", url: "/admin/home" }, // CRUD Home.tsx
      { title: "Product", url: "/admin/product" },
      { title: "Artikel", url: "/admin/artikel" },
    ],
  },
  {
    title: "Authentication",
    icon: Shield,
    type: "dropdown",
    children: [
      { title: "Email", url: "/admin/email" },
      { title: "Password", url: "/admin/password" },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Maksi Integrasi Teknologi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) =>
                item.type === "single" ? (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer px-2 py-2 rounded-md hover:bg-muted">
                        <div className="flex items-center">
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children?.map((child) => (
                          <SidebarMenuButton key={child.title} asChild>
                            <a
                              href={child.url}
                              className="block px-2 py-1 text-sm rounded-md hover:bg-accent"
                            >
                              {child.title}
                            </a>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    </details>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Menu */}
        <div className="mt-auto border-t p-4">
          <UserMenu />
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
