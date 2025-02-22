"use client";

import * as React from "react";
import { LayoutDashboard,Newspaper  } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard ,
    },
    {
      title: "Manage Project",
      url: "/dashboard/manage-projects",
      icon: LayoutDashboard ,
    },
    {
      title: "Manage Blogs",
      url: "/dashboard/manage-blogs",
      icon: Newspaper,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="bg-[#0C0A09] text-muted-foreground antialiased">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-[#0C0A09] text-muted-foreground antialiased">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
