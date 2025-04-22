import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"
import Head from "next/head"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full text-primary bg-white shadow-md">
      <Head>
        <meta name="description" content="NoteSleuth - Your all-in-one platform for lead generation, deal tracking, and note trading." />
        <meta name="keywords" content="mortgage notes, lead generation, deal tracking, note trading, real estate investment" />
        <meta name="author" content="NoteSleuth" />
      </Head>
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo-lightbg.png" alt="NoteSleuth Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">NoteSleuth</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6">
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
            <NavigationMenuItem>
              <Link
                href="/"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Join the Waitlist
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </NavigationMenu>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/features" className="hover:text-primary/90 transition-colors">
              Features
            </Link>
            <Link href="/contact" className="hover:text-primary/90 transition-colors">
              Contact
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Join the Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
