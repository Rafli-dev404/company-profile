import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar";
import React from "react";
import LayoutAdminProps from "../Interface/AdminInterface";

export default function LayoutAdmin({ children, title }: LayoutAdminProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4">
        <div className="flex items-center space-x-4 mb-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
