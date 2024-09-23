import React from "react";
import CardComp from "./cardComp";
import { getBusinessNews } from "@/actions/articleActions";

export default async function Business() {
  const businessNewsFetched = await getBusinessNews();
  const newBusinessNewsFetched = businessNewsFetched.slice(0, 2);

  return (
    <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 grid-cols-1">
      {newBusinessNewsFetched.map((newBusiness, i) => {
        return (
          <CardComp
            key={newBusiness.id}
            image={newBusiness.thumbnail as string}
            title={newBusiness.title}
            category={newBusiness.Category?.title as string}
            link={`/detailed/${newBusiness.id}`}
            time={newBusiness.readTime as string}
            mediahouse={newBusiness.MediaHouse?.title as string}
            mediahouseImage={newBusiness.MediaHouse?.image as string}
            description={newBusiness.description as string}
          />
        );
      })}
    </div>
  );
}
