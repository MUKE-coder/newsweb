import { fetchArticles } from "@/actions/articleActions";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import React from "react";
import { columns } from "./columns";
import { ArticleProps } from "@/types/types";
import { News } from "@prisma/client";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/article-managment",
  description:
    "Stay informed with the latest news, stories, and insights from Rubirizi and beyond. Rubirizi Bulletin offers in-depth coverage, timely updates, and a fresh perspective on the topics that matter most.",
  alternates: {
    canonical: "/article-managment",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default async function page() {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  const newsArticles = (await fetchArticles()) || [];
  return (
    <div>
      <div className="lg:p-8 md:p-8 ">
        <TableHeader
          title="News Articles"
          linkTitle="Add Article"
          href="/dashboard/article-managment/add-article"
          data={newsArticles}
          model="news"
        />
        <div className="py-8">
          <DataTable data={newsArticles} columns={columns} />
        </div>
      </div>
    </div>
  );
}
