import { getAllCats } from "@/actions/catActions";
import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
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

export default async function FooterComp() {
  const currentDate = new Date().getFullYear();
  const categories: CategoryWithoutNews[] = (await getAllCats()) || [];

  return (
    <footer className=" mt-[9rem] relative">
      <div className="mx-auto  max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex width flex-container justify-between">
          <div>
            <div className="text-[#f45b42]">
              <Link
                href="/"
                className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
              >
                <span className="text-[1rem]">Rubirizi Bulletin</span>
              </Link>
            </div>

            <p className="mt-4 max-w-xs text-gray-500">
              Craft narratives that ignite inspiration, knowledge, and
              entertainment
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <Facebook />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <Github />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <Dribbble />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex w-[80%] flex-shrink-0 flex-wrap width-column">
            {categories?.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={`/categories/${item.slug}`}
                  className={`relative px-3 py-2 rounded-md transition-colors`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-gray-500 absolute position bottom-[12%]">
          &copy; {currentDate}. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
