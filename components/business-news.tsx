import React from "react";
import { getBusinessNews } from "@/actions/articleActions";
import { FormatDate } from "@/lib/formatDate";
import CardComp from "./cards/cardComp";

export default async function BusinessNews() {
  const businessNewsFetched = await getBusinessNews();

  return (
    <div className="grid lg:grid-cols-4 gap-4 lg:px-4 md:px-4 px-4 lg:mt-6 md:mt-4 mt-4 md:grid-cols-2 grid-cols-1">
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
