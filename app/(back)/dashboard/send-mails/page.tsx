import { fetchArticles } from "@/actions/articleActions";
import { fetchSubscribers } from "@/actions/subscriberActions";
import EmailArticleForm from "@/components/EmailArticleForm";
import React from "react";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/send-emails",
  description:
    "Stay informed with the latest news, stories, and insights from Rubirizi and beyond. Rubirizi Bulletin offers in-depth coverage, timely updates, and a fresh perspective on the topics that matter most.",
  alternates: {
    canonical: "/send-emails",
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
