"use client";
import Link from "next/link";
import React from "react";
import {
  BookOpen,
  Disc2,
  Home,
  Layers,
  Mails,
  Menu,
  Search,
  Settings,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DropDownComp from "../dropDown";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

const navBtns = [
  {
    icon: <Home className="h-4 w-4" />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    title: "All Articles",
    link: "/dashboard/article-managment",
  },
  {
    icon: <UsersRound className="h-4 w-4" />,
    title: "Subscribers",
    link: "/dashboard/subscribers",
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "Categories",
    link: "/dashboard/article-managment/add-category",
  },
  {
    icon: <Disc2 className="h-4 w-4" />,
    title: "Mediahouses",
    link: "/dashboard/article-managment/add-media",
  },
  {
    icon: <Mails className="h-4 w-4" />,
    title: "Send mails",
    link: "/dashboard/send-mails",
  },
];
export default function Header({ session }: { session: Session }) {
  const pathName = usePathname();
  const id = session?.user.id;
  const isActive = pathName === `/dashboard/settings/edit-user/${id}`;
  return (
    <header className="flex fixed lg:w-[79%] md:w-[79%] w-full z-[5] bg-gray-200/40 backdrop-blur-md top-0 right-0 h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
                <span className="text-[1.1rem]">Rubirizi Bulletin</span>
              </Link>
            </div>
            {navBtns.map((nav, i) => {
              const isActive = pathName === nav.link;
              return (
                <Link
                  key={i}
                  href={nav.link}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  ${
                    isActive ? "bg-black text-white" : ""
                  }`}
                >
                  {nav.icon}
                  {nav.title}
                </Link>
              );
            })}
            <Link
              href={`/dashboard/settings/edit-user/${id}`}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  ${
                isActive ? "bg-black text-white" : ""
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              disabled
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropDownComp session={session} />
    </header>
  );
}
