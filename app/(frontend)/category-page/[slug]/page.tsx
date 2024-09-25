"use client";
import React, { Suspense, useEffect, useState } from "react";
import { fetchArticleCats } from "@/actions/articleActions";
import CardComp from "@/components/cards/cardComp";
import { Button } from "@/components/ui/button";
import { FormatDate } from "@/lib/formatDate";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import SparklesText from "@/components/magicui/sparkles-text";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonLoader } from "@/components/loadComp";

interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  content: any;
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

const ARTICLES_PER_PAGE = 12;

// function SkeletonLoader() {
//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {Array(ARTICLES_PER_PAGE)
//           .fill(null)
//           .map((_, index) => (
//             <div key={index} className="flex flex-col space-y-3">
//               <Skeleton className="h-48 w-full rounded-lg" />
//               <Skeleton className="h-4 w-3/4" />
//               <Skeleton className="h-4 w-1/2" />
//               <div className="flex justify-between items-center">
//                 <Skeleton className="h-8 w-8 rounded-full" />
//                 <Skeleton className="h-4 w-1/4" />
//               </div>
//             </div>
//           ))}
//       </div>
//       <div className="flex justify-center mt-6 space-x-2">
//         <Skeleton className="h-10 w-10 rounded" />
//         <Skeleton className="h-10 w-32" />
//         <Skeleton className="h-10 w-10 rounded" />
//       </div>
//     </>
//   );
// }

export default function ArticleCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug = "" } = params;
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadArticles = async () => {
      if (!slug) return;
      const allArticles = await fetchArticleCats({ slug });
      setArticles(allArticles || []);
      setTotalPages(Math.ceil((allArticles?.length || 0) / ARTICLES_PER_PAGE));
      setIsLoading(false);
    };
    loadArticles();
  }, [slug]);

  const getCurrentPageArticles = () => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return articles.slice(startIndex, endIndex);
  };
  const newSlug = slug.toUpperCase();
  return (
    <div className="container mt-6 mx-auto">
      <h1 className="text-4xl font-bold mb-5">
        <SparklesText text={newSlug} />
      </h1>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCurrentPageArticles().map((article) => (
            <CardComp
              key={article.id}
              image={article.thumbnail || ""}
              title={article.title}
              category={article.Category?.title || ""}
              link={`/detailed/${article.id}`}
              time={FormatDate(article.createdAt)}
              mediahouse={article.MediaHouse?.title || ""}
              description={article.description || ""}
              mediahouseImage={article.MediaHouse?.image || ""}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6 space-x-2">
        <Button
          onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronsLeft />
        </Button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev: any) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <ChevronsRight />
        </Button>
      </div>
    </div>
  );
}
