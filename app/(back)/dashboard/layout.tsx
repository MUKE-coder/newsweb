import Header from "@/components/adminComps/header";
import Sidebar from "@/components/adminComps/sidebar";
import React, { ReactNode } from "react";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";

export default async function Layout({ children }: { children: ReactNode }) {
  const session: any = await getServerSession(authOptions);
  return (
    <div className="bg-[#dae4fdb4]/10 min-h-screen">
      <Sidebar />
      <div className="md:ml-[220px] lg:ml-[280px]">
        <Header session={session} />
        <main className="flex flex-col mt-14 gap-4 p-2 md:p-5 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
