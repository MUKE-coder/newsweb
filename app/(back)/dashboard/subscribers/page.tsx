import React from "react";
import { Subscriber } from "@prisma/client";
import { columns } from "./columns";
import { fetchSubscribers } from "@/actions/subscriberActions";
import TableHeader from "@/components/DataTableComponents/TableHeader copy";
import DataTable from "@/components/DataTableComponents/DataTable";

export default async function page() {
  const subscribers: Subscriber[] = (await fetchSubscribers()) || [];
  return (
    <div>
      {/* <AddArticle /> */}
      <div className="lg:p-8 md:p-8 ">
        <TableHeader
          title="Subscribers"
          data={subscribers}
          model="subscriber"
        />
        <div className="py-8">
          <DataTable data={subscribers} columns={columns} />
        </div>
      </div>
    </div>
  );
}
