import { getFeaturedArticles } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";
import { News } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import SkeletonComp from "../skeletonComp";
interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
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
export default async function MiddleCard({
  MiddleCardData,
}: {
  MiddleCardData: NewsProps;
}) {
  return (
    <Suspense fallback={<SkeletonComp />}>
      <Link
        href={`/detailed/${MiddleCardData.id}`}
        className="group w-[100%] col-span-2 rounded-lg relative block bg-black"
      >
        <Image
          width={262}
          height={292}
          alt={MiddleCardData.title}
          src={MiddleCardData.thumbnail || "/placeholder-image.jpg"}
          className="absolute inset-0 h-full rounded-lg w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="mt-32 sm:mt-48 lg:mt-96">
            <div className="flex flex-col gap-2 text-white">
              <div className="flex items-center gap-5 mt-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full">
                    <Image
                      width={225}
                      height={225}
                      className="w-full rounded-full"
                      src={
                        MiddleCardData.MediaHouse?.image ||
                        "/placeholder-logo.jpg"
                      }
                      alt={`${
                        MiddleCardData.MediaHouse?.title || "Media house"
                      } logo`}
                    />
                  </div>
                  <h3 className="lg:text-[1rem] headlineFont md:text-[1rem] text-[0.8rem] font-bold">
                    {MiddleCardData.MediaHouse?.title}
                  </h3>
                </div>
                <div>
                  <h3 className="text-[0.8rem] headlineFont text-gray-200">
                    {FormatDate(MiddleCardData.createdAt) || "N/A"}
                  </h3>
                </div>
              </div>
              <div className="">
                <h1 className="lg:text-[1.3rem] line-clamp-2 subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold ">
                  {MiddleCardData.title}
                </h1>
                <p className="line-clamp-2">
                  {MiddleCardData.description || "No description available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
}
