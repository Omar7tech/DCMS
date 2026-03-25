import { Outlet } from "react-router"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { DynamicBreadcrumbs } from "@/components/breadcrumbs"

function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col min-h-screen">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="h-7 w-7" />
          <Separator orientation="vertical" className="h-6" />
          <DynamicBreadcrumbs />
        </header>
        <div className="flex-1 p-4 pt-2 md:p-6 md:pt-4">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout