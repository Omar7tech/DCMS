import { Link, useLocation } from "react-router"
import { Home } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface DynamicBreadcrumbsProps {
  homeHref?: string
  items?: BreadcrumbItem[]
}

export function DynamicBreadcrumbs({ homeHref = "/admin", items }: DynamicBreadcrumbsProps) {
  const location = useLocation()
  
  const breadcrumbs = items || generateBreadcrumbs(location.pathname)
  
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={homeHref} className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbSeparator />
            {item.href && index < breadcrumbs.length - 1 ? (
              <BreadcrumbLink asChild>
                <Link to={item.href}>{item.label}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const pathWithoutBase = pathname.replace(/^\/admin/, "") || "/"
  
  if (pathWithoutBase === "/") return []
  
  const segments = pathWithoutBase.split("/").filter(Boolean)
  
  return segments.map((segment, index) => {
    const href = `/admin/${segments.slice(0, index + 1).join("/")}`
    return {
      label: formatLabel(segment),
      href
    }
  })
}

function formatLabel(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}
