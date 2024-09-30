import { getFeaturedArticles } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function EditorCard() {
  const editorCardData = await getFeaturedArticles("editors_pick");
  const cardFiltered = editorCardData?.[0];
  if (!cardFiltered) {
    return null; // or some fallback UI
  }
  return (
    <Link
      href={`/detailed/${cardFiltered.slug}`}
      className="group w-[100%] col-span-2 rounded-lg relative block bg-black"
    >
      <Image
        width={262}
        height={292}
        alt="loading"
        src={cardFiltered?.thumbnail as string}
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
                    src={cardFiltered.MediaHouse?.image as string}
                    alt="mediahouse"
                  />
                </div>
                <h3 className="lg:text-[1rem] md:text-[1rem] text-[0.8rem]  font-bold subHeaderFont">
                  {cardFiltered.MediaHouse?.title}
                </h3>
              </div>
              <div>
                <h3 className="text-[0.8rem] text-gray-200 subHeaderFont">
                  {FormatDate(cardFiltered.createdAt)}
                </h3>
              </div>
            </div>
            <div className="">
              <h1 className="lg:text-[1.3rem] subHeaderFont  md:text-[1.3rem] text-[1.1rem] font-bold ">
                {cardFiltered.title}
              </h1>
              <p className="line-clamp-3 mt-2 mb-2">
                {cardFiltered.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
