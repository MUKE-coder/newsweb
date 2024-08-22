import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RightCards({ articalRight }: any) {
  console.log(`this is the right data ${articalRight}`);

  return (
    <div className="w-[100%] lg:col-span-1 md:col-span-1 col-span-2 flex gap-4 flex-col">
      {
        articalRight.map((item:any , i:any)=>{
            return(
                <Link key={i} href="/" className="w-full">
        <div className="w-full lg:h-[5rem] md:h-[5rem] h-[10rem] overflow-hidden">
          <Image
            className="w-full rounded-md overflow-hidden"
            width={183}
            height={275}
            src="/images/john.avif"
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
              <h3 className="lg:text-[1rem] headlineFont md:text-[1rem] text-[0.8rem] font-bold">
                Netflix
              </h3>
            </div>
            <div>
              <h3 className="text-[0.8rem] headlineFont text-gray-600">12 minutes ago</h3>
            </div>
          </div>
          <div className="">
            <h1 className="lg:text-[1.3rem] subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold ">
              {item.title}{" "}
            </h1>
            <p className="line-clamp-3">
              There has been an official announcment about John Wick: Chapter 4s
              streaming release. However given its a lionsgate film John Wick:
              chapter 4 will eventually be released on Starz,...
            </p>
          </div>
          <div className="">
            <h3 className="text-[#e00e0e] headlineFont lg:text-[1rem] md:text-[1rem] text-[0.7rem] font-bold">
              Movies
            </h3>
          </div>
        </div>
      </Link>
            )
        })
      }
      {/* <div className="w-full">
        <div className="w-full h-[5rem] overflow-hidden">
          <Image
            className="w-full rounded-[1.1rem] overflow-hidden"
            width={183}
            height={275}
            src="/images/john.avif"
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
              Where To Watch John Wick Chapter 4{" "}
            </h1>
            <p className="line-clamp-3">
              There has been an official announcment about John Wick: Chapter 4s
              streaming release. However given its a lionsgate film John Wick:
              chapter 4 will eventually be released on Starz,...
            </p>
          </div>
          <div className="">
            <h3 className="text-[#e00e0e] lg:text-[1rem] md:text-[1rem] text-[0.7rem]lg:font-normal md:font-normal font-bold">
              Movies
            </h3>
          </div>
        </div>
      </div> */}
    </div>
  );
}
