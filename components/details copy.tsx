import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { MoveRight, Clock, User, Tag, Building } from "lucide-react";
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

interface ContentBlock {
  type: string;
  content?: any[];
  attrs?: Record<string, any>;
}
interface contentData {
  content: ContentBlock[];
}

const renderContent = (content: any) => {
  if (!Array.isArray(content)) {
    console.error("Content is not an array:", content);
    return null;
  }

  return content.map((block: any, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-4">
            {block.content?.map((textBlock: any, i: number) => {
              if (textBlock.type === "text") {
                return <span key={i}>{textBlock.text}</span>;
              } else if (textBlock.type === "link") {
                return (
                  <Link
                    key={i}
                    href={textBlock.attrs.href}
                    className="text-blue-600 hover:underline"
                  >
                    {textBlock.content[0].text}
                  </Link>
                );
              }
              return null;
            })}
          </p>
        );
      case "heading":
        const HeadingTag = `h${
          block.attrs?.level || 2
        }` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={index} className="font-bold mb-2">
            {block.content?.map((textBlock: any, i: number) => (
              <span key={i}>{textBlock.text}</span>
            ))}
          </HeadingTag>
        );
      case "image":
        return (
          <div key={index} className="my-4">
            <Image
              src={block.attrs.src}
              alt={block.attrs.alt || ""}
              width={block.attrs.width || 600}
              height={block.attrs.height || 400}
              className="rounded-lg"
            />
            {block.attrs.caption && (
              <p className="text-sm text-gray-600 mt-2">
                {block.attrs.caption}
              </p>
            )}
          </div>
        );
      default:
        console.warn(`Unhandled block type: ${block.type}`);
        return null;
    }
  });
};

export default function Details({
  articleFetched,
}: {
  articleFetched: ArticleProps | News[] | any;
}) {
  let contentData: contentData | null;
  try {
    contentData = JSON.parse(articleFetched.content);
  } catch (error) {
    console.error("Error parsing content:", error);
    contentData = null;
  }

  // const [content, setContent] = useState<any>(
  //   JSON.parse(articleFetched.content)
  // );

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

        <div className="prose max-w-none">
          {contentData && contentData.content ? (
            renderContent(contentData.content)
          ) : (
            <p>No content available</p>
          )}
        </div>
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
