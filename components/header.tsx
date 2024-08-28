"use client";

import React from "react";

import {
  CircleUser,
  FolderPen,
  Menu,
  Newspaper,
  Package2,
  PenIcon,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/config/auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import DropDownComp from "./dropDown";

export default async function Header({ session }: { session: Session }) {
  const smallnavigation = [
    {
      name: "Stories",
      href: "/",
    },
    {
      name: "Creator",
      href: "/",
    },
    {
      name: "community",
      href: "/",
    },
    {
      name: "Subscribe",
      href: "/",
    },
    {
      name: "Signup",
      href: "/signup",
    },
  ];
  const navigation = [
    {
      name: "Stories",
      href: "/",
    },
    {
      name: "Creator",
      href: "/",
    },
    {
      name: "community",
      href: "/",
    },
    {
      name: "Subscribe",
      href: "/",
    },
  ];
  return (
    <header className="sticky justify-between  z-[20] top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 w-full">
      <nav className="hidden  flex-col justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="text-[#f45b42]">
          <Link
            href="/"
            className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
          >
            <span className="text-[1rem]">Lubiliizi Bulletin</span>
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {navigation.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium z-[30]">
            {smallnavigation.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {!session && (
          <Link
            href="/signup"
            className="bg-black px-3 py-1 rounded-md text-white"
          >
            Signup
          </Link>
        )}

        {session && (
          <Link href="/dashboard" className="flex gap-3 items-center">
            write <FolderPen className="w-4 h-4" />
          </Link>
        )}

        {session && (
            <DropDownComp session={session}/>
        )}
      </div>
    </header>
  );
}
