import { fetchArticles } from "@/actions/articleActions";
import { fetchSubscribers } from "@/actions/subscriberActions";
import EmailArticleForm from "@/components/EmailArticleForm";
import React from "react";

export default async function page() {
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
