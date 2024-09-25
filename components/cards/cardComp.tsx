import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  category: string;
  time: string;
  title: string;
  link: string;
  description: string;
  mediahouse: string;
  mediahouseImage: string;
};

export default function CardComp({
  image,
  category,
  time,
  title,
  link,
  description,
  mediahouse,
  mediahouseImage,
}: CardProps) {
  return (
    <Link href={link} className="w-full  col-span-1">
      <div className="w-full overflow-hidden">
        <Image
          className="w-full lg:h-[12rem] md:h-[10rem] h-[10rem] rounded-[0.6rem] overflow-hidden"
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
                src={mediahouseImage}
                alt="netflix"
              />
            </div>
            <h3 className="lg:text-[1rem] subHeaderFont md:text-[1rem] text-[0.8rem]  font-bold">
              {mediahouse}
            </h3>
          </div>
          <div>
            <h3 className="text-[0.8rem] subHeaderFont text-gray-600">
              {time}
            </h3>
          </div>
        </div>
        <div className="">
          <h1 className="lg:text-[1.3rem] line-clamp-2 subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold ">
            {title}{" "}
          </h1>
          <p className="line-clamp-2 mt-2 mb-2">{description}</p>
        </div>
        <div className="">
          <h3 className="text-[#e00e0e] lg:text-[1rem] md:text-[1rem] text-[0.7rem] font-bold">
            {category}
          </h3>
        </div>
      </div>
    </Link>
  );
}
