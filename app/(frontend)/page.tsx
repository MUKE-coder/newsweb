import Business from "@/components/cards/business";
import EditorCard from "@/components/cards/editorCard";
import EditorCards from "@/components/cards/editorCards";
import LatestNews from "@/components/cards/latestNews";
import MustRead from "@/components/cards/mustRead";
import SportsComp from "@/components/cards/sports";
import TopCard from "@/components/cards/topCard";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="lg:px-4 md:px-4 px-2  mt-10">
        <div className="lg:px-16 md:px-bg-[12 px-4">
          <div className="bg-[#ffffff] px-4 py-6 text-center rounded-lg flex flex-col gap-3">
            <div className="lg:text-[1rem] md:text-[1rem] text-[0.7rem]">
              <h3 className="logoFont">WELCOME TO LUBILIIZI BULLETIN</h3>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="lg:text-[1.5rem] headlineFont md:text-[1.3rem] text-[1rem] font-bold">
                Craft <span className="text-[#e5101a]">narratives</span> ✍🏻 that
                ignite <span className="text-[#e5101a]">inspiration</span>💡,
              </h2>
              <h2 className="lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] font-bold">
                <span className="text-[#e5101a]">Knowledge</span>📕 and{" "}
                <span className="text-[#e5101a]">entertainment</span>🎬
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:px-16 md:px-12 px-4">
          <TopCard />
        </div>

        <div className="lg:px-16 md:px-12 px-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
              Latest News
            </h1>
            <Link
              className="flex items-center gap-2 text-[#e00e0e] font-bold"
              href="/all-articles"
            >
              see all <MoveRight className="w-4 h-5" />
            </Link>
          </div>
          <LatestNews />
        </div>

        <div className="lg:px-16 md:px-12 px-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
              Must Read
            </h1>
            <Link
              className="flex items-center gap-2 text-[#e00e0e] font-bold"
              href="/must-read-articles"
            >
              see all <MoveRight className="w-4 h-5" />
            </Link>
          </div>
          <MustRead />
        </div>

        <div className="lg:px-16 md:px-12 px-4 lg:mt-[4rem] md:mt-[3rem] top-margin">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
              Editor{"'"}s Pick
            </h1>
            <Link
              className="flex items-center gap-2 text-[#e00e0e] font-bold"
              href="/editors-pick-articles"
            >
              see all <MoveRight className="w-4 h-5" />
            </Link>
          </div>
          <div className="lg:mt-[2rem] md:mt-[2rem] mt-[2rem]">
            <EditorCard />
            <div className="lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
              <EditorCards />
            </div>
          </div>
        </div>

        <div className="lg:px-16 grid lg:grid-cols-2 gap-6 place-items-center md:grid-cols-1 grid-cols-1 md:px-12 px-4 lg:mt-[4rem] md:mt-[3rem] mt-[2rem]">
          <div className="">
            <div className="flex justify-between items-center">
              <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
                Bussiness
              </h1>
              <Link
                className="flex items-center gap-2 text-[#e00e0e] font-bold"
                href="/business-news"
              >
                {" "}
                <MoveRight className="w-4 h-5" />
              </Link>
            </div>
            <div className="lg:mt-[2rem] md:mt-[2rem] mt-[2rem]">
              <Business />
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
                Sports News
              </h1>
              <Link
                className="flex items-center gap-2 text-[#e00e0e] font-bold"
                href="/sports"
              >
                {" "}
                <MoveRight className="w-4 h-5" />
              </Link>
            </div>
            <div className="lg:mt-[1rem] md:mt-[2rem] mt-[2rem]">
              <SportsComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
