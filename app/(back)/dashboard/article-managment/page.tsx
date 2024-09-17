import { fetchArticles } from "@/actions/articleActions";
import AddArticle from "@/components/adminComps/addArticle";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import React from "react";
import { columns } from "./columns";
import { ArticleProps } from "@/types/types";

export default async function page() {
  const newsArticles:any | ArticleProps[]  = await fetchArticles()
  return (
    <div>
      {/* <AddArticle /> */}
      <div className="p-8">
      <TableHeader
        title="News Articles"
        linkTitle="Add Article"
        href="/dashboard/article-managment/add-article"
        data={newsArticles}
        model="category"
      />
      <div className="py-8">
        <DataTable data={newsArticles} columns={columns}/>
      </div>
    </div>
    </div>
  );
}
