
import { AppSidebar } from "@/components/modules/admin/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-[#0C0A09] text-muted-foreground antialiased">
      <AppSidebar className="" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-[#0C0A09] text-muted-foreground antialiased">
          <div className="flex items-center gap-2 px-4 ">
            <SidebarTrigger className="-ml-1 " />
          </div>
        </header>
        <div className="p-4 pt-0 min-h-screen bg-[#0C0A09] text-muted-foreground antialiased">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}