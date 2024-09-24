import React from "react";
import { getBusinessNews } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";
import CardComp from "./cards/cardComp";

export default async function BusinessNews() {
  const businessNewsFetched = await getBusinessNews();


  return (
    <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 grid-cols-1">
      {businessNewsFetched.map((newBusiness) => {
        return (
          <CardComp
            key={newBusiness.id}
            image={newBusiness.thumbnail as string}
            title={newBusiness.title}
            category={newBusiness.Category?.title as string}
            link={`/detailed/${newBusiness.id}`}
            time={FormatDate(newBusiness.createdAt)}
            mediahouse={newBusiness.MediaHouse?.title as string}
            mediahouseImage={newBusiness.MediaHouse?.image as string}
            description={newBusiness.description as string}
          />
        );
      })}
    </div>
  );
}
