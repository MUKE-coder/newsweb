import { News } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LeftCard({ articalLeft }: any) {
  return (
    <Link href={`/detailed/${articalLeft.id}`} className="w-full  col-span-1">
      <div className="w-full overflow-hidden">
        <Image
          className="w-full rounded-[1.1rem] overflow-hidden"
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
                src={articalLeft.MediaHouse.image}
                alt="mediahouse"
              />
            </div>
            <h3 className="lg:text-[1rem] headlineFont md:text-[1rem] text-[0.8rem]  font-bold">
              {articalLeft.MediaHouse.title}
            </h3>
          </div>
          <div>
            <h3 className="text-[0.8rem] headlineFont text-gray-600">
              {articalLeft.readTime}
            </h3>
          </div>
        </div>
        <div className="">
          <h1 className="lg:text-[1.3rem] subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold ">
            {articalLeft.title}{" "}
          </h1>
          <p className="line-clamp-3">{articalLeft.description}</p>
        </div>
        <div className="">
          <h3 className="text-[#e00e0e] headlineFont lg:text-[1rem] md:text-[1rem] text-[0.7rem] font-bold">
            {articalLeft.Category.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
