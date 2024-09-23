import React from "react";
import CardComp from "./cardComp";
import { getSportsNews } from "@/actions/articleActions";

export default async function SportsComp() {
  const sportsNews = await getSportsNews();
  const newsportsNews = sportsNews.slice(0, 2);

  return (
    <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 grid-cols-1">
      {newsportsNews.map((newSports, i) => {
        return (
          <CardComp
            key={newSports.id}
            image={newSports.thumbnail as string}
            title={newSports.title}
            category={newSports.Category?.title as string}
            link={`/detailed/${newSports.id}`}
            time={newSports.readTime as string}
            mediahouse={newSports.MediaHouse?.title as string}
            mediahouseImage={newSports.MediaHouse?.image as string}
            description={newSports.description as string}
          />
        );
      })}
    </div>
  );
}
