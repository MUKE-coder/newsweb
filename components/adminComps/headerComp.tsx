"use client"


import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {Bell,} from "lucide-react"
  
import {
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
  } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const menuNavs =[
  {
    name:"Dashboard",
    link:"/dashboard",
    icon:"Home"
  },
  {
    name:"Article Managment",
    link:"/dashboard/article-managment",
    icon:""
  },
  {
    name:"Comments & Moderation",
    link:"/dashboard/comments",
    icon:""
  },
  {
    name:"User Managment",
    link:"/dashboard/user-managment",
    icon:""
  },
  {
    name:"Analysis",
    link:"/dashboard/analysis",
    icon:""
  },
]





export default function HeaderComp() {
const pathName = usePathname()
  return (
   <div>
     <header className="flex justify-between   bg-white/70 z-30 backdrop-blur-md w-full fixed h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 md:px-6 ">
         <div className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
         <div className="text-[#f45b42]">
          <Link
            href="/"
            className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
          >
            <span className="text-[1rem]">Lubiliizi Bulletin</span>
          </Link>
        </div>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8 display-none">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
          
          <div className="w-full flex-1 display-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          
          <div className='flex gap-4 items-center flex-class'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
              <div className="text-[#f45b42]">
          <Link
            href="/"
            
            className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
          >
            <span className="text-[1rem]">Lubiliizi Bulletin</span>
          </Link>
        </div>
                {
                  menuNavs.map((menuNav,i)=>{
                    const isActive = pathName=== menuNav.link
                    return(
                      <Link
                      key={i}
                  href={menuNav.link}
                  className={`mx-[-0.65rem] text-[1rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${isActive ? 'font-bold': ''}`}
                >
                  
                  {menuNav.name}
                </Link>
                    )
                  })
                }
              </nav>
             
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </header>
     </div>
  )
}
