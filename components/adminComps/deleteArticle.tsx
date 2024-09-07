"use client";
import { deleteArticle } from "@/actions/articleActions";
import { ArticleProps } from "@/types/types";
import { News } from "@prisma/client";
import { useRouter } from "next/navigation";

import React from "react";
import toast from "react-hot-toast";

export default function DeleteArticles({id}: string | News | ArticleProps | any ) {
  const router = useRouter();
  async function handleDeleteArticle() {
    try {
      const deletedArticle = await deleteArticle({id});
      toast.success("Category deleted successfully.");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return <button onClick={handleDeleteArticle}>Delete</button>;
}
