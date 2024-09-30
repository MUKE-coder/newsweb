import { fetchArticles } from "@/actions/articleActions";
import { fetchSubscribers } from "@/actions/subscriberActions";
import EmailArticleForm from "@/components/EmailArticleForm";
import React from "react";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  // Subscribers,
  const rawSubscribers = (await fetchSubscribers()) || [];
  const rawArticles = (await fetchArticles()) || [];

  //Articles
  return (
    <div>
      <EmailArticleForm
        rawRecipients={rawSubscribers}
        rawArticles={rawArticles}
      />
    </div>
  );
}
