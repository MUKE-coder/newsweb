import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonComp() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Skeleton className="h-[9rem] bg-gray-300 w-full rounded-[0.6rem]" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 bg-gray-300 w-[250px]" />
            <Skeleton className="h-4 bg-gray-300 w-[200px]" />
            <Skeleton className="h-4 bg-gray-300 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
