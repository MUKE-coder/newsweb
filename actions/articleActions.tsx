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
      title,
      content,
      description,
      readTime,
      categoryId,
      mediaHouseId,
      featuredOption,
    } = data;

    // Update the article with the calculated readTime

    const createdArticle = await db.news.create({
      data: {
        thumbnail,
        title,
        content,
        description,
        readTime: data.readTime,
        categoryId,
        mediaHouseId,
        featuredOption,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    });

    // await db.news.update({
    //   where: { id: createdArticle.id },
    //   data: { readTime },
    // });
  revalidatePath("/dashboard/article-managment")
  // revalidatePath("/")
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
        User:true,
      },
    });
    
     return fetchedArticles;
  } catch (error) {
    console.log(error);
  }
}

//delete
export async function deleteArticle({id}: string | any ) {
  try {
    const deletedArticle = await db.news.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/article-managment")
      return deletedArticle;
  } catch (error) {
    console.log(error);
  }
}

//fetch single article
export async function getSingleArticle({id}:string | News | ArticleProps | any){
  try {
   const fetchArticle = await db.news.findUnique({
    where:{id:id}
   }) 
  return fetchArticle
  } catch (error) {
    console.log(error)
  }
}
 
//update
export async function updateData(data:ArticleProps | any , id:string){
  try {
  const updatedData = await db.news.update({
    where:{
      id:id
    },
    data
  })
  revalidatePath("/dashboard/article-managment")
  return updatedData  
  } catch (error) {
    console.log(error)
  }
}