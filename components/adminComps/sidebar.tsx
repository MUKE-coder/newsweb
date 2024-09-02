"use client"

import Link from "next/link";
import React from "react";
import {
  Bell,
  BookOpen,
  ChartBar,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { link } from "fs";
import { usePathname } from "next/navigation";

const navBtns = [
  {
    icon: <Home className="h-4 w-4" />,
    title: "dashboard",
    link: "/dashboard",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    title: "Article Managment",
    link: "/dashboard/article-managment",
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "User Managment",
    link: "/dashboard/user-managment",
  },
  {
    icon: <ChartBar className="h-4 w-4" />,
    title: "Analysis",
    link: "/dashboard/analysis",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    title: "Settings",
    link: "/dashboard/settings",
  },
];

export default function Sidebar() {
    const pathName = usePathname()
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navBtns.map((nav, i) => {
                const isActive = pathName === nav.link
              return (
                <Link
                  key={i}
                  href={nav.link}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  ${
                    isActive ? 'bg-[#e50914] text-white' : ''
                  }`}
                >
                  {nav.icon}
                  {nav.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
