import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const latestNews = [
    {
        image:{
          one:"/images/john.avif",
          two:"/images/net.png"
        },
title:"Where To Watch John Wick Chapter 4",
description:"There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will eventually be released on Starz,..."

    },
    {
        image:{
            one:"/images/john.avif",
          two:"/images/net.png"
        },
title:"Where To Watch John Wick Chapter 4",
description:"There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will eventually be released on Starz,..."

    },
    {
        image:{
            one:"/images/john.avif",
          two:"/images/net.png"
        },
title:"Where To Watch John Wick Chapter 4",
description:"There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will eventually be released on Starz,..."

    },
]

export default function LatestNews() {
  return (
    <div className='grid lg:gap-8 md:gap-8 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 md:mt-10 mt-4'>
     {
        latestNews.map((news,i)=>{
            return(
                <Link href='/detailed' key={i} className='w-full'>
                <div className='w-full overflow-hidden'>
                  <Image className='w-full rounded-[1.1rem] overflow-hidden' width={183} height={275} src={news.image.one} alt="wick" />
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-5 mt-3'>
                  <div className='flex items-center gap-3'>
                  <div className='w-5 h-5 rounded-full'>
                  <Image width={225} height={225} className='w-full rounded-full' src="/images/net.png" alt="netflix" />
                  </div>
                  <h3 className='lg:text-[1rem] headlineFont md:text-[1rem] text-[0.8rem]  font-bold'>Netflix</h3>
                  </div>     
                  <div>
                  <h3 className='text-[0.8rem] headlineFont text-gray-600'>12 minutes ago</h3>
                  </div>     
                  </div>
                  <div className=''>
                  <h1 className='lg:text-[1.3rem] subHeaderFont md:text-[1.3rem] text-[1.1rem] font-bold '>Where To Watch John Wick Chapter 4 </h1>
                  <p className='line-clamp-3'>There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will eventually be released on Starz,...</p>
                  </div>
                 <div className=''>
                  <h3 className='text-[#e00e0e] headlineFont lg:text-[1rem] md:text-[1rem] text-[0.7rem] font-bold'>Movies</h3>
                 </div>
                </div>
              </Link>
            )
        })
     }
    </div>
  )
}
