"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Settings, UserPlus } from "lucide-react";
import { fetchLatestSubscriber } from "@/actions/subscriberActions";
import { fetchLatestArticle } from "@/actions/articleActions";
import ActivityCardSkeleton from "./activitySkeletonLoader";

type SubscriberData = {
  id: string;
  email: string;
  createdAt: string;
};

type ArticleData = {
  id: string;
  title: string;
  createdAt: string;
};

type FetchResult<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

type Activity = {
  id: string;
  icon: JSX.Element;
  bgColor: string;
  title: string;
  time: string;
};

export default function ActivityCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState<Activity[]>([
    // {
    //   id: "initial-1",
    //   icon: <Settings className="text-yellow-500" size={16} />,
    //   bgColor: "bg-yellow-100",
    //   title: "System update completed",
    //   time: "1 day ago",
    // },
  ]);

  const [lastCheckedIds, setLastCheckedIds] = useState({
    subscriber: null as string | null,
    article: null as string | null,
  });

  useEffect(() => {
    const checkForNewActivities = async () => {
      try {
        const [subscriberResult, articleResult] = await Promise.all([
          fetchLatestSubscriber(),
          fetchLatestArticle(),
        ]);
        setIsLoading(false);
        const newActivities: Activity[] = [];

        if (
          subscriberResult.status === 200 &&
          subscriberResult.data &&
          subscriberResult.data.id !== lastCheckedIds.subscriber
        ) {
          const formattedDate = new Date(
            subscriberResult.data.createdAt
          ).toLocaleString();
          newActivities.push({
            id: subscriberResult.data.id,
            icon: <UserPlus className="text-green-500" size={16} />,
            bgColor: "bg-green-100",
            title: `New subscriber joined: ${subscriberResult.data.email}`,
            time: formattedDate,
          });
          setLastCheckedIds((prev) => ({
            ...prev,
            subscriber: subscriberResult.data.id,
          }));
        }

        if (
          articleResult.status === 200 &&
          articleResult.data &&
          articleResult.data.id !== lastCheckedIds.article
        ) {
          const formattedDate = new Date(
            articleResult.data.createdAt
          ).toLocaleString();
          newActivities.push({
            id: articleResult.data.id,
            icon: <FileText className="text-blue-500" size={16} />,
            bgColor: "bg-blue-100",
            title: `New article published: ${articleResult.data.title}`,
            time: formattedDate,
          });
          setLastCheckedIds((prev) => ({
            ...prev,
            article: articleResult.data.id,
          }));
        }

        if (newActivities.length > 0) {
          setActivities((prev) => [...newActivities, ...prev].slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching latest activities:", error);
      }
    };

    // Check for new activities immediately
    checkForNewActivities();

    // Set up an interval to check periodically (e.g., every 30 seconds)
    const intervalId = setInterval(checkForNewActivities, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [lastCheckedIds]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        {isLoading ? (
          <ActivityCardSkeleton />
        ) : (
          <CardContent>
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.id} className="flex items-center">
                  <div className={`${activity.bgColor} p-2 rounded-full mr-3`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
