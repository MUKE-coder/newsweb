import { AddMediaForm } from "@/components/adminComps/addMedia";
import MediaComp from "@/components/adminComps/mediaComp";
import React from "react";

export default async function page() {
  return (
    <div className="grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 justify-center">
      <AddMediaForm />
      <MediaComp />
    </div>
  );
}
