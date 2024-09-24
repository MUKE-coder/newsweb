import React from "react";
import { getSportsNews } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";
import CardComp from "./cards/cardComp";

export default async function Sports() {
  const sportsNews = await getSportsNews();

  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-1 grid-cols-1">
      {sportsNews.map((newSports) => {
        return (
          <CardComp
            key={newSports.id}
            image={newSports.thumbnail as string}
            title={newSports.title}
            category={newSports.Category?.title as string}
            link={`/detailed/${newSports.id}`}
            time={FormatDate(newSports.createdAt)}
            mediahouse={newSports.MediaHouse?.title as string}
            mediahouseImage={newSports.MediaHouse?.image as string}
            description={newSports.description as string}
          />
        );
      })}
    </div>
  );
}
