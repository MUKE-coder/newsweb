import React from "react";
import NewsForm from "@/components/adminComps/newsForm";
import { getAllCats } from "@/actions/catActions";
import { getMedia } from "@/actions/mediaActions";
import { getSingleArticle } from "@/actions/articleActions";

export default async function page({params:{id}}:{params:{id:string}}) {
 const initialData = await getSingleArticle({id})
  const categories =  await getAllCats();
  const mediahouse = await getMedia()
  return (
    <div>
      <NewsForm categories={categories} initialData={initialData} mediahouse={mediahouse}/>
    </div>
  );
}
