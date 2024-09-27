"use server";
import { getSingleUserData, getUserData } from "@/actions/userActions";
import EditUser from "@/components/forms/editUser";
import SparklesText from "@/components/magicui/sparkles-text";
import React from "react";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const singleUserData = await getSingleUserData({ id });
  return (
    <div>
      <div>
        <SparklesText text="Update Your Details" />
      </div>
      <div className="max-w-screen-sm mx-auto px-4 ">
        <EditUser singleUserData={singleUserData} />
      </div>
    </div>
  );
}
