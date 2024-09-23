// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { MoveRight } from "lucide-react";
// import LatestNews from "./cards/latestNews";

// interface ArticleFetched {
//   title: string;
//   description: string;
//   content: {
//     type: string;
//     content: any; // It can be an array or a single object initially
//   };
// }

// const renderContent = (content: any) => {
//   // Ensure content is an array, even if it's a single object
//   const contentArray = Array.isArray(content) ? content : [content];

//   // Map over content blocks
//   return contentArray.map((block: any, index: number) => {
//     if (block.type === "paragraph") {
//       return (
//         <p key={index}>
//           {Array.isArray(block.content) ? (
//             block.content.map((textBlock: any, i: number) => (
//               <span key={i}>{textBlock.text}</span>
//             ))
//           ) : (
//             <span>Invalid paragraph content</span>
//           )}
//         </p>
//       );
//     } else if (block.type === "heading") {
//       const HeadingTag = `h${
//         block.attrs?.level || 2
//       }` as keyof JSX.IntrinsicElements;
//       return (
//         <HeadingTag key={index}>
//           {Array.isArray(block.content) ? (
//             block.content.map((textBlock: any, i: number) => (
//               <span key={i}>{textBlock.text}</span>
//             ))
//           ) : (
//             <span>Invalid heading content</span>
//           )}
//         </HeadingTag>
//       );
//     }
//     // Add more cases for other block types (e.g., images, lists)
//     return null;
//   });
// };

// export default function Details({
//   articleFetched,
// }: {
//   articleFetched: ArticleFetched;
// }) {
//   return (
//     <div className="mt-5">
//       <div>
//         <div className="mb-[1.5rem]">
//           <h1 className="lg:text-[1.3rem] subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold">
//             {articleFetched.title}
//           </h1>
//           <p className="mt-4">{articleFetched.description}</p>
//         </div>
//         <div className="w-full overflow-hidden">
//           <Image
//             className="w-full lg:h-[25rem] md:h-[25rem] h-[15rem] rounded-lg bg-contain overflow-hidden"
//             width={183}
//             height={275}
//             src="/images/john.avif"
//             alt="wick"
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="mt-8">
//             {/* Safeguard content rendering */}
//             {articleFetched.content ? (
//               renderContent(articleFetched.content.content)
//             ) : (
//               <p>No content available</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="lg:px-16 md:px-12 px-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
//         <div className="flex justify-between items-center">
//           <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
//             Latest News
//           </h1>
//           <Link
//             className="flex items-center gap-2 text-[#e00e0e] font-bold"
//             href="/"
//           >
//             see all <MoveRight className="w-4 h-5" />
//           </Link>
//         </div>
//         <LatestNews />
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MoveRight, Clock, User, Tag, Building } from "lucide-react";
import LatestNews from "./cards/latestNews";

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
  mediaHouseId: string;
  category: { title: string };
  mediaHouse: { title: string };
  user: { name: string };
};

interface ContentBlock {
  type: string;
  content?: any[];
  attrs?: Record<string, any>;
}

const renderContent: any = (content: ContentBlock[]) => {
  return content.map((block: ContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="mt-4">
            {block.content?.map((textBlock, i) => (
              <span
                key={i}
                style={textBlock.marks?.reduce((acc: any, mark: any) => {
                  switch (mark.type) {
                    case "bold":
                      return { ...acc, fontWeight: "bold" };
                    case "italic":
                      return { ...acc, fontStyle: "italic" };
                    case "underline":
                      return { ...acc, textDecoration: "underline" };
                    default:
                      return acc;
                  }
                }, {})}
              >
                {textBlock.text}
              </span>
            ))}
          </p>
        );
      // ... other cases ...
    }
  });
};

export default function Details({
  articleFetched,
}: {
  articleFetched: ArticleProps;
}) {
  let contentData: ContentBlock[];
  try {
    contentData = JSON.parse(articleFetched.content);
  } catch (error) {
    console.error("Error parsing content:", error);
    contentData = [];
  }
  // const contentAsString = JSON.stringify(contentData);
  return (
    <div className="mt-5 max-w-4xl mx-auto">
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{articleFetched.title}</h1>
          <p className="text-lg text-gray-600">{articleFetched.description}</p>

          <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4">
            <span className="flex items-center mr-4">
              <User className="w-4 h-4 mr-1" />
              {articleFetched.user?.name || "Unknown Author"}
            </span>
            <span className="flex items-center mr-4">
              <Clock className="w-4 h-4 mr-1" />
              {articleFetched.readTime || "Unknown read time"}
            </span>
            <span className="flex items-center mr-4">
              <Tag className="w-4 h-4 mr-1" />
              {articleFetched.category?.title || "Uncategorized"}
            </span>
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {articleFetched.mediaHouse?.title || "Unknown Media House"}
            </span>
          </div>
        </div>

        {articleFetched.thumbnail && (
          <div className="w-full overflow-hidden mb-6">
            <Image
              className="w-full h-64 object-cover rounded-lg"
              width={800}
              height={400}
              src={articleFetched.thumbnail}
              alt={articleFetched.title}
            />
          </div>
        )}

        <div className="prose max-w-none">
          {contentData.length > 0 ? (
            renderContent(contentData)
          ) : (
            <p>No content available</p>
          )}
        </div>

        {articleFetched.featuredOption && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <span className="font-bold">{articleFetched.featuredOption}</span>
          </div>
        )}
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
