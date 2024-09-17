import React from "react";
import NewsForm from "@/components/adminComps/newsForm";
import { getAllCats } from "@/actions/catActions";
import { getMedia } from "@/actions/mediaActions";
import { getUserData } from "@/actions/userActions";
import { Session } from "inspector";

export default async function page() {
   const categories =  await getAllCats();
  const mediahouse = await getMedia()
  return (
    <div>
      <NewsForm categories={categories}   mediahouse={mediahouse}/>
    </div>
  );
}
