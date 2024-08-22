import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  category: string;
  time: string;
  title: string;
  link: string;
  description:string
  };

export default function CardComp({
  image,
  category,
  time,
  title,
  link,
  description
  }: CardProps) {

  return (
    <Link href='/' className="w-full  col-span-1">
      <div className="w-full overflow-hidden">
        <Image
          className="w-full rounded-[1.1rem] overflow-hidden"
          width={183}
          height={275}
          src={image}
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
                src="/images/net.png"
                alt="netflix"
              />
            </div>
            <h3 className="lg:text-[1rem] md:text-[1rem] text-[0.8rem] lg:font-normal md:font-normal font-bold">
              Netflix
            </h3>
          </div>
          <div>
            <h3 className="text-[0.8rem] text-gray-600">12 minutes ago</h3>
          </div>
        </div>
        <div className="">
          <h1 className="lg:text-[1.3rem] md:text-[1.3rem] text-[1.1rem] font-bold ">
            {title}{" "}
          </h1>
          <p className="line-clamp-3">
            {description}
          </p>
        </div>
        <div className="">
          <h3 className="text-[#e00e0e] lg:text-[1rem] md:text-[1rem] text-[0.7rem]lg:font-normal md:font-normal font-bold">
            Movies
          </h3>
        </div>
      </div>
    </Link>
  );
}
