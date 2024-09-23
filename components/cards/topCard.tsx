import { fetchArticles } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function TopCard() {
  const allData = await fetchArticles();
  const newArticle = allData?.[0];
  if (!newArticle) {
    return null;
  }
  return (
    <Link
      href={`/detailed/${newArticle.id}`}
      className="grid gap-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem] lg:grid-cols-2 md:grid-cols-2 grid-cols-1"
    >
      <div className="w-full overflow-hidden">
        <Image
          className="w-full rounded-3xl overflow-hidden"
          width={183}
          height={275}
          src={newArticle.thumbnail as string}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="lg:w-8 lg:h-8 md:w-8 md:h-8 w-5 h-5 rounded-full">
              <Image
                width={225}
                height={225}
                className="w-full rounded-full"
                src={newArticle.MediaHouse?.image as string}
                alt="image"
              />
            </div>
            <h3 className="headlineFont font-bold lg:text-[1rem] md:text-[1rem] text-[0.8rem]">
              {newArticle.MediaHouse?.title}
            </h3>
          </div>
          <div>
            <h3 className="text-gray-600 lg:text-[0.9rem] headlineFont md:text-[0.9rem] text-[0.8rem]">
              {FormatDate(newArticle.createdAt)}
            </h3>
          </div>
        </div>
        <div className="lg:mt-[0.7rem] md:mt-[0.7rem] mt-0 ">
          <h1 className="lg:text-[3rem] line-clamp-2 md:text-[2.5rem] subHeaderFont text-[1.5rem] lg:mb-[1rem] md:mb-[1rem] mb-0">
            {newArticle.title}
          </h1>
          <p className="line-clamp-2">{newArticle.description}</p>
        </div>
        <div className="lg:mt-[0.7rem] md:mt-[0.7rem] mt-0 ">
          <h3 className="text-[#e00e0e] lg:text-[1rem] md:text-[1rem] text-[0.5rem] font-bold headlineFont">
            {newArticle.Category?.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
