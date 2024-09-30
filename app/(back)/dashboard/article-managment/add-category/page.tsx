import { AddCatForm } from "@/components/adminComps/addCategory";
import CatsComp from "@/components/adminComps/catsComp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "/add-category",
  description:
    "Stay informed with the latest news, stories, and insights from Rubirizi and beyond. Rubirizi Bulletin offers in-depth coverage, timely updates, and a fresh perspective on the topics that matter most.",
  alternates: {
    canonical: "/add-category",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function page() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 justify-center">
      <AddCatForm />
      <CatsComp />
    </div>
  );
}
