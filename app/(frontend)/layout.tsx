import FooterComp from "@/components/footerComp";
import Header from "@/components/header";
import { InputWithButton } from "@/components/subscribeComp";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session: any = await getServerSession(authOptions);
  // console.log(`Session Data:`, session);
  return (
    <div>
      <Header session={session} />
      {children}
      <div className="lg:px-16 md:px-12 px-4 lg:mt-[4rem]  md:mt-[3rem] mt-[2rem] ">
        <div className="bg-[#ffffff] px-4 py-6 gap-4 rounded-lg  grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1   items-center  ">
          <div className="lg:text-[1rem]  md:text-[1rem] text-[0.7rem]">
            <h3 className="logoFont">GET FIRST UPDATES</h3>
            <h2 className="lg:text-[1.5rem] headlineFont md:text-[1.3rem] text-[1rem] font-bold">
              Get the news in front line by <br />
              <span className="text-[#e5101a]">Subscribe</span> ✍🏻 our latest
              updates
            </h2>
          </div>
          <div className="">
            <InputWithButton />
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}
