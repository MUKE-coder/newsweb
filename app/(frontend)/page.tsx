// import Business from "@/components/cards/business";
// import EditorCard from "@/components/cards/editorCard";
// import EditorCards from "@/components/cards/editorCards";
// import LatestNews from "@/components/cards/latestNews";
// import MustRead from "@/components/cards/mustRead";
// import SportsComp from "@/components/cards/sports";
// import TopCard from "@/components/cards/topCard";
// import SkeletonComp from "@/components/skeletonComp";
// import { MoveRight } from "lucide-react";
// import Link from "next/link";
// import React, { Suspense } from "react";

// export const metadata = {
//   title: "Rubirizi Bulletin - Latest News, Must Read, and Editor's Picks",
//   description:
//     "Stay informed with Rubirizi Bulletin. Get the latest news, must-read articles, and editor's picks from Rubirizi and beyond.",
// };

// export default function page() {
//   return (
//     <div>
//       <div className="lg:px-4 md:px-4 px-2  mt-10">
//         <div className="lg:px-16 md:px-bg-[12 px-4">
//           <div className="bg-[#ffffff] px-4 py-6 text-center rounded-lg flex flex-col gap-3">
//             <div className="lg:text-[1rem] md:text-[1rem] text-[0.7rem]">
//               <h3 className="logoFont">WELCOME TO RUBIRIZI BULLETIN</h3>
//             </div>
//             <div className="flex flex-col gap-3">
//               <h2 className="lg:text-[1.5rem] headlineFont md:text-[1.3rem] text-[1rem] font-bold">
//                 Craft <span className="text-[#e5101a]">narratives</span> ✍🏻 that
//                 ignite <span className="text-[#e5101a]">inspiration</span>💡,
//               </h2>
//               <h2 className="lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] font-bold">
//                 <span className="text-[#e5101a]">Knowledge</span>📕 and{" "}
//                 <span className="text-[#e5101a]">entertainment</span>🎬
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="lg:px-16 md:px-12 px-4">
//           <Suspense fallback={<SkeletonComp />}>
//             <TopCard />
//           </Suspense>
//         </div>

//         <div className="lg:px-16 md:px-12 px-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
//           <div className="flex justify-between items-center">
//             <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
//               Latest News
//             </h1>
//             <Link
//               className="flex items-center gap-2 text-[#e00e0e] font-bold"
//               href="/all-articles"
//             >
//               see all <MoveRight className="w-4 h-5" />
//             </Link>
//           </div>
//           <Suspense fallback={<SkeletonComp />}>
//             <LatestNews />
//           </Suspense>
//         </div>

//         <div className="lg:px-16 md:px-12 px-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
//           <div className="flex justify-between items-center">
//             <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
//               Must Read
//             </h1>
//             <Link
//               className="flex items-center gap-2 text-[#e00e0e] font-bold"
//               href="/must-read-articles"
//             >
//               see all <MoveRight className="w-4 h-5" />
//             </Link>
//           </div>
//           <Suspense fallback={<SkeletonComp />}>
//             <MustRead />
//           </Suspense>
//         </div>

//         <div className="lg:px-16 md:px-12 px-4 lg:mt-[4rem] md:mt-[3rem] top-margin">
//           <div className="flex justify-between items-center">
//             <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
//               Editor{"'"}s Pick
//             </h1>
//             <Link
//               className="flex items-center gap-2 text-[#e00e0e] font-bold"
//               href="/editors-pick-articles"
//             >
//               see all <MoveRight className="w-4 h-5" />
//             </Link>
//           </div>
//           <div className="lg:mt-[2rem] md:mt-[2rem] mt-[2rem]">
//             <Suspense fallback={<SkeletonComp />}>
//               <EditorCard />
//             </Suspense>
//             <div className="lg:mt-[3rem] md:mt-[3rem] mt-[2rem]">
//               <Suspense fallback={<SkeletonComp />}>
//                 <EditorCards />
//               </Suspense>
//             </div>
//           </div>
//         </div>

//         <div className="lg:px-16 grid lg:grid-cols-2 gap-6 place-items-center md:grid-cols-1 grid-cols-1 md:px-12 px-4 lg:mt-[4rem] md:mt-[3rem] mt-[2rem]">
//           <div className="">
//             <div className="flex justify-between items-center">
//               <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
//                 Bussiness
//               </h1>
//               <Link
//                 className="flex items-center gap-2 text-[#e00e0e] font-bold"
//                 href="/categories/business"
//               >
//                 {" "}
//                 <MoveRight className="w-4 h-5" />
//               </Link>
//             </div>
//             <div className="lg:mt-[2rem] md:mt-[2rem] mt-[2rem]">
//               <Suspense fallback={<SkeletonComp />}>
//                 <Business />
//               </Suspense>
//             </div>
//           </div>

//           <div className="">
//             <div className="flex justify-between items-center">
//               <h1 className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold">
//                 Sports News
//               </h1>
//               <Link
//                 className="flex items-center gap-2 text-[#e00e0e] font-bold"
//                 href="/categories/sports"
//               >
//                 {" "}
//                 <MoveRight className="w-4 h-5" />
//               </Link>
//             </div>
//             <div className="lg:mt-[1rem] md:mt-[2rem] mt-[2rem]">
//               <Suspense fallback={<SkeletonComp />}>
//                 <SportsComp />
//               </Suspense>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Suspense } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import Business from "@/components/cards/business";
import EditorCard from "@/components/cards/editorCard";
import EditorCards from "@/components/cards/editorCards";
import LatestNews from "@/components/cards/latestNews";
import MustRead from "@/components/cards/mustRead";
import SportsComp from "@/components/cards/sports";
import TopCard from "@/components/cards/topCard";
import SkeletonComp from "@/components/skeletonComp";

export const metadata = {
  title: "Rubirizi Bulletin - Latest News, Must Read, and Editor's Picks",
  description:
    "Stay informed with Rubirizi Bulletin. Get the latest news, must-read articles, and editor's picks from Rubirizi and beyond.",
};

export default function Page() {
  return (
    <main className="mt-10 lg:px-4 md:px-4 px-2">
      <section className="lg:px-16 md:px-12 px-4">
        <div className="bg-white px-4 py-6 text-center rounded-lg flex flex-col gap-3">
          <h1 className="sr-only">
            Rubirizi Bulletin - Your Source for Local and International News
          </h1>
          <p className="lg:text-base md:text-base text-xs logoFont">
            WELCOME TO RUBIRIZI BULLETIN
          </p>
          <div className="flex flex-col gap-3">
            <p className="lg:text-2xl md:text-xl text-base font-bold headlineFont">
              Craft <span className="text-[#e5101a]">narratives</span> ✍🏻 that
              ignite <span className="text-[#e5101a]">inspiration</span>💡,
            </p>
            <p className="lg:text-2xl md:text-xl text-base font-bold">
              <span className="text-[#e5101a]">Knowledge</span>📕 and{" "}
              <span className="text-[#e5101a]">entertainment</span>🎬
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-16 md:px-12 px-4" aria-label="Top Stories">
        <Suspense fallback={<SkeletonComp />}>
          <TopCard />
        </Suspense>
      </section>

      <section
        className="lg:px-16 md:px-12 px-4 lg:mt-12 md:mt-12 mt-8"
        aria-label="Latest News"
      >
        <div className="flex justify-between items-center">
          <h2 className="lg:text-2xl md:text-2xl text-lg font-bold">
            Latest News
          </h2>
          <Link
            className="flex items-center gap-2 text-[#e00e0e] font-bold hover:underline"
            href="/all-articles"
          >
            see all <MoveRight className="w-4 h-5" aria-hidden="true" />
          </Link>
        </div>
        <Suspense fallback={<SkeletonComp />}>
          <LatestNews />
        </Suspense>
      </section>

      <section
        className="lg:px-16 md:px-12 px-4 lg:mt-12 md:mt-12 mt-8"
        aria-label="Must Read Articles"
      >
        <div className="flex justify-between items-center">
          <h2 className="lg:text-2xl md:text-2xl text-lg font-bold">
            Must Read
          </h2>
          <Link
            className="flex items-center gap-2 text-[#e00e0e] font-bold hover:underline"
            href="/must-read-articles"
          >
            see all <MoveRight className="w-4 h-5" aria-hidden="true" />
          </Link>
        </div>
        <Suspense fallback={<SkeletonComp />}>
          <MustRead />
        </Suspense>
      </section>

      <section
        className="lg:px-16 md:px-12 px-4 lg:mt-16 md:mt-12 mt-8"
        aria-label="Editor's Pick"
      >
        <div className="flex justify-between items-center">
          <h2 className="lg:text-2xl md:text-2xl text-lg font-bold">
            Editor{"'"}s Pick
          </h2>
          <Link
            className="flex items-center gap-2 text-[#e00e0e] font-bold hover:underline"
            href="/editors-pick-articles"
          >
            see all <MoveRight className="w-4 h-5" aria-hidden="true" />
          </Link>
        </div>
        <div className="lg:mt-8 md:mt-8 mt-8">
          <Suspense fallback={<SkeletonComp />}>
            <EditorCard />
          </Suspense>
          <div className="lg:mt-12 md:mt-12 mt-8">
            <Suspense fallback={<SkeletonComp />}>
              <EditorCards />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="lg:px-16 md:px-12 px-4 lg:mt-16 md:mt-12 mt-8 grid lg:grid-cols-2 gap-6 place-items-start">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="lg:text-2xl md:text-2xl text-lg font-bold">
              Business
            </h2>
            <Link
              className="flex items-center gap-2 text-[#e00e0e] font-bold hover:underline"
              href="/categories/business"
              aria-label="See all business articles"
            >
              <MoveRight className="w-4 h-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:mt-8 md:mt-8 mt-8">
            <Suspense fallback={<SkeletonComp />}>
              <Business />
            </Suspense>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className="lg:text-2xl md:text-2xl text-lg font-bold">
              Sports News
            </h2>
            <Link
              className="flex items-center gap-2 text-[#e00e0e] font-bold hover:underline"
              href="/categories/sports"
              aria-label="See all sports articles"
            >
              <MoveRight className="w-4 h-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:mt-4 md:mt-8 mt-8">
            <Suspense fallback={<SkeletonComp />}>
              <SportsComp />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
