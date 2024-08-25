
import Image from 'next/image'
import React from 'react'
import CardComp from './cards/cardComp'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import LatestNews from './cards/latestNews'

export default function Details() {
  return (
    <div className='mt-5'>
      <div>
      <div className="w-full overflow-hidden">
        <Image
          className="w-full lg:h-[25rem] md:h-[25rem] h-[15rem] rounded-lg bg-contain overflow-hidden"
          width={183}
          height={275}
          src="/images/john.avif"
          alt="wick"
        />
      </div>
      <div className="flex flex-col  gap-2">
        
        <div className="">
          <h1 className="lg:text-[1.3rem] subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold ">
          Where To Watch John Wick Chapter 4{" "}
          </h1>
          <p className="">
          There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will
          </p>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full">
              <Image
                width={225}
                height={225}
                className="w-full rounded-full"
                src="/images/net.png"
                alt="netflix"
              />
            </div>
            <h3 className="lg:text-[1rem] headlineFont md:text-[1rem] text-[0.8rem]  font-bold">
              Netflix
            </h3>
          </div>
          <div>
            <h3 className="text-[0.8rem] headlineFont text-gray-600">12 minutes ago</h3>
          </div>
        </div>
        
      </div>
      </div>
      <div className='lg:px-16 md:px-12 px-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem]'>
       <div className='flex justify-between items-center'>
        <h1 className='lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] font-bold'>Latest News</h1>
        <Link className='flex items-center gap-2 text-[#e00e0e] font-bold' href="/">see all <MoveRight className='w-4 h-5' /></Link>
       </div>
       <LatestNews/>
      </div>
    </div>
  )
}
