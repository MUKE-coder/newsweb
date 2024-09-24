import BusinessNews from "@/components/business-news";
import SkeletonComp from "@/components/skeletonComp";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div>
      <Suspense fallback={<SkeletonComp />}>
        <BusinessNews />
      </Suspense>
    </div>
  );
}
