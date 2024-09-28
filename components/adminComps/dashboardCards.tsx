import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Layers, Newspaper, Users } from "lucide-react";
import { fetchArticles } from "@/actions/articleActions";
import { fetchSubscribers } from "@/actions/subscriberActions";
import { getAllCats } from "@/actions/catActions";

export default async function DashboardCards() {
  const articlesCreated = await fetchArticles();
  const countedArticles = articlesCreated?.length;

  const subsCreated = await fetchSubscribers();
  const countedSubscribers = subsCreated?.length;

  const allCats = await getAllCats();
  const countedCats = allCats?.length;

  // Calculate the number of articles created in the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentArticles =
    articlesCreated?.filter(
      (article) => new Date(article.createdAt) > thirtyDaysAgo
    ).length || 0;

  // Calculate the number of subscribers gained in the last 24 hours
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
  const recentSubscribers =
    subsCreated?.filter((sub) => new Date(sub.createdAt) > twentyFourHoursAgo)
      .length || 0;

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Number of Articles
          </CardTitle>
          <Newspaper className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{countedArticles}</div>
          <p className="text-xs text-muted-foreground">
            Articles created till date
          </p>
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{countedSubscribers}</div>
          <p className="text-xs text-muted-foreground">Subscribers till date</p>
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Categories</CardTitle>
          <Layers className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{countedCats}</div>
          <p className="text-xs text-muted-foreground">
            All categories till date
          </p>
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Subscribers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{recentSubscribers}</div>
          <p className="text-xs text-muted-foreground">
            Subscribers in last 24 hours
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
