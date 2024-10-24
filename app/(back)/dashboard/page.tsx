import ActivityCard from "@/components/adminComps/activityCard";
import DashboardCards from "@/components/adminComps/dashboardCards";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/dashboard",
  description:
    "Stay informed with the latest news, stories, and insights from Rubirizi and beyond. Rubirizi Bulletin offers in-depth coverage, timely updates, and a fresh perspective on the topics that matter most.",
  alternates: {
    canonical: "/dashboard",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function Dashboard() {
  return (
    <div>
      <div className="mt-6 mb-12">
        <DashboardCards />
      </div>

      <div
        className="flex flex-1 py-4 bg-white items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Manage Your News Articles
          </h3>
          <p className="text-sm text-muted-foreground">
            Start publishing news articles to engage your audience and grow your
            readership.
          </p>
          <Link href="/dashboard/article-managment/add-article">
            <Button className="mt-2 bg-[#f53b07]">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Article
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <ActivityCard />
      </div>
    </div>
  );
}
