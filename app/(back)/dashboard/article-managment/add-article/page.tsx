import React from "react";
import NewsForm from "@/components/adminComps/newsForm";
import { getAllCats } from "@/actions/catActions";
import { getMedia } from "@/actions/mediaActions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/add-article",
  description:
    "Stay informed with the latest news, stories, and insights from Rubirizi and beyond. Rubirizi Bulletin offers in-depth coverage, timely updates, and a fresh perspective on the topics that matter most.",
  alternates: {
    canonical: "/add-article",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default async function page() {
  const categories = await getAllCats();
  const mediahouse = await getMedia();
  return (
    <div>
      <NewsForm categories={categories} mediahouse={mediahouse} />
    </div>
  );
}
