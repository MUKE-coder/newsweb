"use server";

import { db } from "@/lib/db";
import { CatProps, CatPropsUpdate } from "@/types/types";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createCategory(data: CatProps) {
  try {
    const { slug, title, image } = data;
    const existingCat = await db.category.findUnique({
      where: { slug },
    });
    if (existingCat) {
      return {
        data: null,
        error: `the above ${slug} category already  exists`,
        status: 409,
      };
    }

    const newCat = await db.category.create({
      data: {
        title,
        slug,
        image,
      },
    });
    revalidatePath("/dashboard/article-managment/add-category");
    revalidatePath("/dashboard/article-managment/add-article");
    return {
      data: newCat,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCats() {
  try {
    const categories: Category[] = await db.category.findMany();
    // console.log(categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
}
export async function updateCat(data: CatPropsUpdate, id: string) {
  try {
    const category = await db.category.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/article-managment/add-category");
    revalidatePath("/dashboard/article-managment/add-article");
    return category;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleCat({ slug }: Category | any) {
  try {
    const singleCat = await db.category.findUnique({
      where: { slug: slug },
    });
    // console.log(singleCat);
    return singleCat;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteCat({ id }: Category | any) {
  try {
    const deletedCat = await db.category.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/article-managment/add-category");
    revalidatePath("/dashboard/article-managment/add-article");
    return deletedCat;
  } catch (error) {
    console.log(error);
  }
}
