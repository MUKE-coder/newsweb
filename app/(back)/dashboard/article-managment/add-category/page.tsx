import { AddCatForm } from "@/components/adminComps/addCategory";
import CatsComp from "@/components/adminComps/catsComp";
import React from "react";

export default function page() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 justify-center">
      <AddCatForm />
      <CatsComp />
    </div>
  );
}
