import { getSingleCat } from "@/actions/catActions";
import { AddCatForm } from "@/components/adminComps/addCategory";
import CatsComp from "@/components/adminComps/catsComp";
import React from "react";
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Fetch the single article
  const initialData = await getSingleCat({ slug });

  return {
    title: initialData?.title,
    description: initialData?.title,
    alternates: {
      canonical: `/detailed/${initialData?.slug}`,
    },
    openGraph: {
      title: initialData?.title,
      description: initialData?.title,
      images: [initialData?.image],
    },
  };
}
export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const singleCat = await getSingleCat({ slug });
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 justify-center">
      <AddCatForm singleCat={singleCat} />
      <CatsComp />
    </div>
  );
}
