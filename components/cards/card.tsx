import { FormatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import SkeletonComp from "../skeletonComp";

interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  slug: string;
  content: any; // Represents Json type
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

export default function LeftCard({ articalLeft }: { articalLeft: NewsProps }) {
  return (
    <Suspense fallback={<SkeletonComp />}>
      <Link
        href={`/detailed/${articalLeft.slug}`}
        className="w-full  col-span-1"
      >
        <div className="w-full overflow-hidden">
          <Image
            className="w-full lg:h-[12rem] md:h-[10rem] h-[10rem] rounded-[0.6rem] overflow-hidden"
            width={183}
            height={275}
            src={articalLeft.thumbnail as string}
            alt="wick"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5 mt-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full">
                <Image
                  width={225}
                  height={225}
                  className="w-full rounded-full"
                  src={articalLeft.MediaHouse?.image as string}
                  alt="mediahouse"
                />
              </div>
              <h3 className="lg:text-[1rem] subHeaderFont md:text-[1rem] text-[0.8rem]  font-bold">
                {articalLeft.MediaHouse?.title}
              </h3>
            </div>
            <div>
              <h3 className="text-[0.8rem] subHeaderFont text-gray-600">
                {FormatDate(articalLeft.createdAt)}
              </h3>
            </div>
          </div>
          <div className="">
            <h1 className="lg:text-[1.3rem] line-clamp-2 subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold ">
              {articalLeft.title}{" "}
            </h1>
            <p className="line-clamp-2 mt-2 mb-2">{articalLeft.description}</p>
          </div>
          <div className="">
            <h3 className="text-[#e00e0e] subHeaderFont lg:text-[1rem] md:text-[1rem] text-[0.7rem] font-bold">
              {articalLeft.Category?.title}
            </h3>
          </div>
        </div>
      </Link>
    </Suspense>
  );
}
