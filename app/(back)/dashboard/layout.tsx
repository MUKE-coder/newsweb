import Header from "@/components/adminComps/header";
import Sidebar from "@/components/adminComps/sidebar";
import React, { ReactNode } from "react";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";

export default async function Layout({ children }: { children: ReactNode }) {
  const session: any = await getServerSession(authOptions);
  return (
    <div className="bg-[#dae4fdb4]/10">
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Header session={session} />
          <main className="flex flex-1 flex-col margin gap-4 md:p-5 p-2 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
