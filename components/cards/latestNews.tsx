import { fetchArticles } from "@/actions/articleActions";
import { News } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  content: any; // Represents Json type
  description?: string | null;
  readTime?: string | null;
  featuredOption: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  categoryId?: string | null;
  mediaHouseId?: string | null;
  User: UserWithoutNews | null;
  Category: CategoryWithoutNews | null;
  MediaHouse: MediaHouseWithoutNews | null;
}

interface UserWithoutNews {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  phone?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password: string;
  isVerfied: boolean;
  token?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

interface MediaHouseWithoutNews {
  id: string;
  title: string;
  image?: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryWithoutNews {
  id: string;
  title: string;
  slug: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default async function LatestNews() {
  function getLatestNews(articles: NewsProps[] | any) {
    // Step 1: Sort the articles by date
    const sortedArticles = articles.sort((a: any, b: any) => {
      const dateA: any = new Date(a.createdAt);
      const dateB: any = new Date(b.createdAt);
      return dateB - dateA; // This sorts from newest to oldest
    });

    // Step 2: Get the first 4 articles
    const latestNews = sortedArticles.slice(0, 4);

    return latestNews;
  }

  // Usage
  const allArticles = await fetchArticles();
  const latestNews: NewsProps[] = getLatestNews(allArticles);

  return (
    <div className="overflow-x-auto pb-4 lg:pb-0">
      <div className="flex lg:flex-wrap md:flex-wrap flex-nowrap gap-4 lg:gap-8 md:gap-8 lg:mt-10 md:mt-10 mt-4">
        {latestNews.map((news) => (
          <Link
            href={`/detailed/${news.id}`}
            key={news.id}
            className="flex-shrink-0 w-[80vw] sm:w-[45vw] md:w-[calc(50%-1rem)] lg:w-[calc(23.6%-1.1rem)]"
          >
            <div className="w-full overflow-hidden">
              <Image
                className="w-full rounded-[1.1rem] overflow-hidden"
                width={183}
                height={275}
                src={news.thumbnail as string}
                alt="thumbnail"
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
                      src={news.MediaHouse?.image as string}
                      alt="netflix"
                    />
                  </div>
                  <h3 className="lg:text-[1rem] headlineFont md:text-[1rem] text-[0.8rem] font-bold">
                    {news.MediaHouse?.title}
                  </h3>
                </div>
                <div>
                  <h3 className="text-[0.8rem] headlineFont text-gray-600">
                    {news.readTime}
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="lg:text-[1.3rem] subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold">
                  {news.title}
                </h1>
                <p className="line-clamp-3">{news.description}</p>
              </div>
              <div>
                <h3 className="text-[#e00e0e] headlineFont lg:text-[1rem] md:text-[1rem] text-[0.7rem] font-bold">
                  {news.Category?.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// function formatDate(dateString) {
//   const date = new Date(dateString)
//   const now = new Date()
//   const diffTime = Math.abs(now - date)
//   const diffMinutes = Math.ceil(diffTime / (1000 * 60))

//   if (diffMinutes < 60) {
//     return `${diffMinutes} minutes ago`
//   } else if (diffMinutes < 1440) {
//     const hours = Math.floor(diffMinutes / 60)
//     return `${hours} hours ago`
//   } else {
//     return date.toLocaleDateString()
//   }
// }
