"use client";

import Link from "next/link";
import React from "react";
import {
  BookOpen,
  ChartBar,
  Disc2,
  Home,
  Layers,
  Mails,
  PlusCircle,
  Settings,
  Users,
  UsersRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Session } from "next-auth";

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
    title: "Send Mails",
    link: "/dashboard/send-mails",
  },
];

export default function Sidebar({ session }: { session: Session }) {
  const pathName = usePathname();
  const id = session.user.id;
  const isActive = pathName === `/dashboard/settings/edit-user/${id}`;
  return (
    <div className="fixed display-none top-0 left-0 h-full w-[220px] lg:w-[280px] border-r bg-muted/40 overflow-y-auto">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <div className="text-[#f45b42]">
            <Link
              href="/"
              className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
            >
              <span className="text-[1.1rem]">Rubirizi Bulletin</span>
            </Link>
          </div>

          {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button> */}
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard/article-managment/add-article"
              className="mb-8"
            >
              <Button className="mt-2 ">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Article
              </Button>
            </Link>
            {navBtns.map((nav, i) => {
              const isActive = pathName === nav.link;
              return (
                <Link
                  key={i}
                  href={nav.link}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  ${
                    isActive ? "bg-[#f53b07] text-white" : ""
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
                isActive ? "bg-[#f53b07] text-white" : ""
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
