"use client";

import React, { useState, useEffect } from "react";
import { FolderPen, Menu, Pencil, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useSession } from "next-auth/react";
import DropDownComp from "./dropDown";
import { getAllCats } from "@/actions/catActions";
import { usePathname } from "next/navigation";

interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  content: any;
  description?: string | null;
  readTime?: string | null;
  featuredOption: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  categoryId?: string | null;
  mediaHouseId?: string | null;
  User: UserWithoutNews | null;
  Category: CategoryWithoutNews | null;
  MediaHouse: MediaHouseWithoutNews | null;
}

interface UserWithoutNews {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  phone?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password: string;
  isVerfied: boolean;
  token?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

interface MediaHouseWithoutNews {
  id: string;
  title: string;
  image?: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryWithoutNews {
  id: string;
  title: string;
  slug: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function HeaderFront() {
  const [categories, setCategories] = useState<CategoryWithoutNews[]>([]);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getAllCats();
      setCategories(cats || []);
    };
    fetchCategories();
  }, []);

  return (
    <div className="sticky justify-between z-[40] top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 w-full">
      <div className="hidden flex-col justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="text-[#f45b42]">
          <Link
            href="/"
            className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
          >
            <span className="text-[1rem]">Rubirizi Bulletin</span>
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          {categories?.map((item, i) => {
            const isActive = pathname === `/categories/${item.slug}`;
            return (
              <Link
                key={i}
                href={`/categories/${item.slug}`}
                className={`relative px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "text-foreground text-red-500"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium z-[70]">
            {categories?.map((item, i) => {
              const isActive = pathname === `/categories/${item.slug}`;
              return (
                <Link
                  key={i}
                  href={`/categories/${item.slug}`}
                  className={`relative px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-foreground text-red-500"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {!session && (
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        )}

        {session && (
          <Link
            href="/dashboard/article-managment/add-article"
            className="flex gap-1 items-center"
          >
            write <Pencil className="w-4 h-4" />
          </Link>
        )}

        {session && <DropDownComp session={session} />}
      </div>
    </div>
  );
}
