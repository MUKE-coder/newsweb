"use client";
import { deleteCat } from "@/actions/catActions";
import { CatProps } from "@/types/types";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function DeleteBtn({ id }: Category | any) {
  const router = useRouter();
  async function handleDeleteCat() {
    try {
      const deleteCats = await deleteCat({ id });
      toast.success("Category deleted successfully.");
      router.refresh();
      window.location.reload()
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return <button onClick={handleDeleteCat}>Delete</button>;
}
