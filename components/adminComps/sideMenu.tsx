"use client"
import Link from 'next/link'
import React from 'react'

import {
  
    Home,
    LineChart,
    Package,
    
    ShoppingCart,
    Users,
  } from "lucide-react"
  import * as Icons from "lucide-react";
import { usePathname } from 'next/navigation';

  
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



export default function SideMenu() {
  const pathname = usePathname();
  
  return (
    <div className="hidden border-r bg-white/75 backdrop-blur-md md:block h-full w-[25%] fixed top-[9.5%]">
    <div className="flex h-full max-h-screen flex-col gap-2">
     
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {
            menuNavs.map((menuNav,i)=>{
              const isActive = pathname === menuNav.link;
              return(
                <Link
                key={i}
            href={`${menuNav.link}`}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all ${
              isActive ? 'bg-[#e50914] text-white' : ''
            }`}
          >
          
            {menuNav.name}
          </Link>
              )
            })
          }
          </nav>
      </div>
      </div>
  </div>
  )
}
