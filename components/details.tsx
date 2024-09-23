import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import LatestNews from "./cards/latestNews";
import { News } from "@prisma/client";
import Editor from "./adminComps/editor";

type ArticleProps = {
  id: string;
  thumbnail: string;
  title: string;
  content: string;
  description: string;
  readTime: string;
  featuredOption: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
  MediaHouseId: string;
  Category: { title: string };
  mediaHouse: { title: string };
  user: { name: string };
};

export default function Details({
  articleFetched,
}: {
  articleFetched: ArticleProps | News[] | any;
}) {
  return (
    <div className="mt-5 max-w-4xl mx-auto">
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{articleFetched.title}</h1>
          <p className="text-gray-600">{articleFetched.description}</p>

          {/* <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4">
            <span className="flex items-center mr-4">
              <Clock className="w-4 h-4 mr-1" />
              {articleFetched.readTime || "Unknown read time"}
            </span>
            <span className="flex items-center mr-4">
              <Tag className="w-4 h-4 mr-1" />
              {articleFetched.Category?.title || "Uncategorized"}
            </span>
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {articleFetched.Category?.title || "Unknown Media House"}
            </span>
          </div> */}
        </div>

        {articleFetched.thumbnail && (
          <div className="w-full overflow-hidden mb-6">
            <Image
              className="w-full h-72 object-cover rounded-lg"
              width={800}
              height={400}
              src={articleFetched.thumbnail}
              alt={articleFetched.title}
            />
          </div>
        )}
      </div>
      <div>
        <Editor
          isEditable={false}
          initialValue={JSON.parse(articleFetched.content)}
        />
      </div>
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <Link
            className="flex items-center gap-2 text-red-600 font-bold"
            href="/"
          >
            See all <MoveRight className="w-4 h-5" />
          </Link>
        </div>
        <LatestNews />
      </div>
    </div>
  );
}
