"use client"
import { useEffect, useId, useState, Suspense } from "react"
import { SearchIcon } from "lucide-react"

import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Početna" },
  { href: "/products", label: "Products" },
  { href: "/#deals", label: "Deals" },
  { href: "/contact", label: "Kontakt" },
]

function HeaderSearch() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const visibleOnProducts = pathname?.startsWith('/products')
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const q = searchParams.get('q') || ''
    setSearchText(q)
  }, [searchParams])

  useEffect(() => {
    if (!visibleOnProducts) return
    const t = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (searchText && searchText.trim()) params.set('q', searchText.trim())
      else params.delete('q')
      const qs = params.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    }, 250)
    return () => clearTimeout(t)
  }, [searchText, visibleOnProducts, pathname, router, searchParams])

  if (!visibleOnProducts) return null

  return (
    <div className="items-center gap-2 flex min-w-0">
      <div className="w-36 sm:w-48 md:w-56 lg:w-72 min-w-0">
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Pretraga proizvoda..."
          aria-label="Pretraga proizvoda"
        />
      </div>
    </div>
  )
}

export default function HeaderBlack() {
  const id = useId()

  return (
    <header className="max-w-6xl px-4 border-b lg:px-6 w-[95vw] mx-auto sticky top-0 min-h-16 h-fit z-999 bg-primary-white">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 lg:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 lg:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 lg:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink href={link.href} className="py-1.5">
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex flex-1 items-center gap-6 max-lg:justify-between">
            <a href="/" className="text-black hover:text-primary-orange/90">
              <Logo />
            </a>
            {/* Navigation menu */}
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-black hover:text-primary-orange py-1.5 font-medium">
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Inline search next to navigation (desktop) */}
            <Suspense fallback={null}>
              <HeaderSearch />
            </Suspense>
          </div>
        </div>
        {/* Right side (desktop) intentionally left empty */}
        <div className="items-center gap-2 max-lg:hidden flex" />
      </div>
    </header>
  );
}
