import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">NoteSleuth</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/features">Features</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
