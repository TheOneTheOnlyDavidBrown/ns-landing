import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full text-primary bg-white shadow-md">
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo-lightbg.png" alt="NoteSleuth Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">NoteSleuth</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link href="/features" className="hover:text-primary/90 transition-colors">
                Features
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className="hover:text-primary/90 transition-colors">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
