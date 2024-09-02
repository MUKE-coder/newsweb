"use client";
import { deleteCat } from "@/actions/catActions";
import { deleteMedia } from "@/actions/mediaActions";
import { CatProps, MediaProps } from "@/types/types";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function Delete({ id }: MediaProps | string) {
  const router = useRouter();
  async function handleDelete() {
    try {
      const deletedMedia = await deleteMedia({ id });
      toast.success("Category deleted successfully.");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return <button onClick={handleDelete}>Delete</button>;
}
