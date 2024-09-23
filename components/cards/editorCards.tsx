import React from "react";
import CardComp from "./cardComp";
import { getFeaturedArticles } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";

export default async function EditorCards() {
  const editorCardData = await getFeaturedArticles("editors_pick");
  const filteredEditorCardData = editorCardData?.slice(1, 5);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
      {filteredEditorCardData?.map((cardData) => {
        return (
          <CardComp
            key={cardData.id}
            image={cardData.thumbnail as string}
            title={cardData.title}
            category={cardData.Category?.title as string}
            link={`/detailed/${cardData.id}`}
            time={FormatDate(cardData.createdAt)}
            mediahouse={cardData.MediaHouse?.title as string}
            mediahouseImage={cardData.MediaHouse?.image as string}
            description={cardData.description as string}
          />
        );
      })}
    </div>
  );
}
