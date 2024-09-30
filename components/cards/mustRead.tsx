import React from "react";
import LeftCard from "./card";
import RightCards from "./rightCards";
import MiddleCard from "./middleCard";
import { getFeaturedArticles } from "@/actions/articleActions";

interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  slug: string;
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

export default async function MustRead() {
  const mustReadArticles: NewsProps[] =
    (await getFeaturedArticles("must_read")) || [];

  if (mustReadArticles.length < 2) {
    console.warn('Not enough "must read" articles available');
    return null; // or return a placeholder component
  }

  const articalRight = mustReadArticles.slice(2, 4);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mt-10 md:mt-10 mt-4">
      <LeftCard articalLeft={mustReadArticles[0]} />
      <MiddleCard MiddleCardData={mustReadArticles[1]} />
      <RightCards articalRight={articalRight} />
    </div>
  );
}
