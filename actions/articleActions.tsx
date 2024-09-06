"use server"


import { db } from "@/lib/db";
import { ArticleProps } from "@/types/types";
 

const currentTime = new Date()
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
        readTime:data.readTime,
        categoryId,
      mediaHouseId,
        featuredOption,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    });
  
  

    await db.news.update({
      where: { id: createdArticle.id },
      data: { readTime },
    });  


    console.log(createdArticle)
return createdArticle
  } catch (error) {
    console.log(error)
  }
}
