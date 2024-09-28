"use server";

import { db } from "@/lib/db";
import { ArticleProps } from "@/types/types";
import { News } from "@prisma/client";
import { revalidatePath } from "next/cache";

//create
const currentTime = new Date();
export async function createArticle(data: ArticleProps) {
  try {
    const {
      thumbnail,
      banner,
      title,
      content,
      description,
      readTime,
      categoryId,
      userId,
      mediaHouseId,
      featuredOption,
    } = data;

    // Update the article with the calculated readTime

    const createdArticle = await db.news.create({
      data: {
        thumbnail,
        banner,
        title,
        content,
        description,
        readTime: data.readTime,
        categoryId,
        mediaHouseId,
        featuredOption,
        userId,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    });

    revalidatePath("/dashboard/article-managment");
    return createdArticle;
  } catch (error) {
    console.log(error);
  }
}

//fetch articles
export async function fetchArticles() {
  try {
    const fetchedArticles = await db.news.findMany({
      include: {
        Category: true,
        MediaHouse: true,
        User: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return fetchedArticles;
  } catch (error) {
    console.log(error);
  }
}

//delete
export async function deleteArticle({ id }: string | any) {
  try {
    const deletedArticle = await db.news.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/article-managment");
    return deletedArticle;
  } catch (error) {
    console.log(error);
  }
}

//fetch single article
export async function getSingleArticle({
  id,
}: string | News | ArticleProps | any) {
  try {
    const fetchArticle = await db.news.findUnique({
      where: { id: id },
    });
    return fetchArticle;
  } catch (error) {
    console.log(error);
  }
}

//update
export async function updateData(data: ArticleProps | any, id: string) {
  try {
    const updatedData = await db.news.update({
      where: {
        id: id,
      },
      data,
    });
    revalidatePath("/dashboard/article-managment");
    return updatedData;
  } catch (error) {
    console.log(error);
  }
}
//fetching featured options
export async function getFeaturedArticles(
  option: string,
  orderBy: "createdAt" | "updatedAt" = "createdAt"
) {
  try {
    const articles = await db.news.findMany({
      where: {
        featuredOption: option,
      },
      orderBy: { [orderBy]: "desc" },
      include: {
        Category: true,
        MediaHouse: true,
        User: true,
      },
    });

    return articles;
  } catch (error) {
    console.log(error);
  }
}

//fetching business news
export async function getBusinessNews() {
  try {
    const businessNews = await db.news.findMany({
      where: {
        Category: {
          title: "Business",
        },
      },
      include: {
        User: true,
        Category: true,
        MediaHouse: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return businessNews;
  } catch (error) {
    console.error("Error fetching business news:", error);
    throw error;
  }
}
//fetching sports news
export async function getSportsNews() {
  try {
    const sportsNews = await db.news.findMany({
      where: {
        Category: {
          title: "Sports",
        },
      },
      include: {
        User: true,
        Category: true,
        MediaHouse: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return sportsNews;
  } catch (error) {
    console.error("Error fetching business news:", error);
    throw error;
  }
}

export async function getCatArticles(
  option: string,
  orderBy: "createdAt" | "updatedAt" = "createdAt"
) {
  try {
    const articles = await db.news.findMany({
      where: {
        Category: {
          title: option,
        },
      },
      include: {
        User: true,
        Category: true,
        MediaHouse: true,
      },
      orderBy: { [orderBy]: "desc" },
    });

    return articles;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchArticleCats({ slug }: { slug: string }) {
  try {
    const fetchedArticles = await db.news.findMany({
      where: {
        Category: {
          slug: slug,
        },
      },
      include: {
        Category: true,
        MediaHouse: true,
        User: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return fetchedArticles;
  } catch (error) {
    console.log(error);
    return [];
  }
}

//fetching latest articles

export async function fetchLatestArticle() {
  try {
    const latestArticle = await db.news.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });

    if (!latestArticle) {
      return {
        data: null,
        error: "No articles found",
        status: 404,
      };
    }

    return {
      data: latestArticle,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error("Error fetching latest article:", error);
    return {
      data: null,
      error: "Failed to fetch latest article",
      status: 500,
    };
  }
}
