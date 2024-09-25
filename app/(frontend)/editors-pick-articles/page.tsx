"use client";

import { getFeaturedArticles } from "@/actions/articleActions";
import CardComp from "@/components/cards/cardComp";
import LoadingComp from "@/components/loadComp";
import SkeletonComp from "@/components/skeletonComp";
import { Button } from "@/components/ui/button";
import { FormatDate } from "@/lib/formatDate";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";

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
const ARTICLES_PER_PAGE = 12;
export default function Page() {
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [totalPages, setTotalPages] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      const allArticles = await getFeaturedArticles("editors_pick");
      setArticles(allArticles || []);
      setTotalPages(Math.ceil((allArticles?.length || 0) / ARTICLES_PER_PAGE));
      setIsLoading(false);
    };
    loadArticles();
  }, []);

  const getCurrentPageArticles = () => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return articles.slice(startIndex, endIndex);
  };

  return (
    <div className="px-4 mt-6">
      {isLoading ? (
        <LoadingComp />
      ) : (
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
          {getCurrentPageArticles().map((article) => {
            return (
              <CardComp
                key={article.id}
                image={article.thumbnail as string}
                title={article.title}
                category={article.Category?.title as string}
                link={`/detailed/${article.id}`}
                time={FormatDate(article.createdAt)}
                mediahouse={article.MediaHouse?.title as string}
                description={article.description as string}
                mediahouseImage={article.MediaHouse?.image as string}
              />
            );
          })}
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
