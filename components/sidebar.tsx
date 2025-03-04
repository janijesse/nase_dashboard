"use client"

import { useSidebar } from "./sidebar-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, CalendarDays, BarChart3, Settings, LogOut, Menu, X, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const { isOpen, toggle } = useSidebar()
  const pathname = usePathname()

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Events",
      path: "/events",
      icon: CalendarDays,
    },
    {
      name: "Monitoring",
      path: "/monitoring",
      icon: Activity,
    },
    {
      name: "Users",
      path: "/users",
      icon: Users,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ]

  return (
    <>
      {/* Overlay para móviles */}
      <div
        className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden", isOpen ? "block" : "hidden")}
        onClick={toggle}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 flex-shrink-0 flex flex-col bg-card sidebar-gradient transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                N
              </div>
              <span className="text-xl font-semibold">Nase</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggle} className="md:hidden">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-4">
              <div className="text-xs text-muted-foreground">Powered by:</div>
              <div className="flex items-center gap-3">
                <div className="h-6 bg-muted/30 rounded px-2 flex items-center justify-center text-xs font-semibold">
                  TALENT ARENA
                </div>
                <div className="h-6 bg-muted/30 rounded px-2 flex items-center justify-center text-xs font-semibold">
                  NOKIA
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === route.path ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                <route.icon className="h-5 w-5" />
                <span>{route.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t p-4">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </div>
      </div>

      {/* Botón para abrir el sidebar en móviles */}
      <Button variant="outline" size="icon" onClick={toggle} className="fixed left-4 top-4 z-40 md:hidden shadow-md">
        <Menu className="h-5 w-5" />
      </Button>
    </>
  )
}

