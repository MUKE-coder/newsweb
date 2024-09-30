import React from "react";
import NewsForm from "@/components/adminComps/newsForm";
import { getAllCats } from "@/actions/catActions";
import { getMedia } from "@/actions/mediaActions";
import { getSingleArticle } from "@/actions/articleActions";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  // Fetch the single article
  const initialData = await getSingleArticle({ id });

  return {
    title: initialData?.title,
    description: initialData?.description,
    alternates: {
      canonical: `/detailed/${initialData?.slug}`,
    },
    openGraph: {
      title: initialData?.title,
      description: initialData?.description,
      images: [initialData?.thumbnail],
    },
  };
}

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const initialData = await getSingleArticle({ id });
  const categories = await getAllCats();
  const mediahouse = await getMedia();
  return (
    <div>
      <NewsForm
        categories={categories}
        initialData={initialData}
        mediahouse={mediahouse}
      />
    </div>
  );
}
