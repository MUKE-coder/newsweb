import Image from 'next/image'
import React from 'react'

export default function TopCard() {
  return (
    <div className='grid gap-4 lg:mt-[3rem] md:mt-[3rem] mt-[2rem] lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
      <div className='w-full overflow-hidden'>
        <Image className='w-full rounded-3xl overflow-hidden' width={183} height={275} src="/images/john.avif" alt="wick" />
      </div>
      <div>
        <div className='flex items-center gap-5'>
        <div className='flex items-center gap-3'>
        <div className='lg:w-8 lg:h-8 md:w-8 md:h-8 w-5 h-5 rounded-full'>
        <Image width={225} height={225} className='w-full rounded-full' src="/images/net.png" alt="netflix" />
        </div>
        <h3 className='lg:font-normal md:font-normal font-bold lg:text-[1rem] md:text-[1rem] text-[0.8rem]'>Netflix</h3>
        </div>     
        <div>
        <h3 className='text-gray-600 lg:text-[0.9rem] md:text-[0.9rem] text-[0.8rem]'>12 minutes ago</h3>
        </div>     
        </div>
        <div className='lg:mt-[0.7rem] md:mt-[0.7rem] mt-0 '>
        <h1 className='lg:text-[3rem] md:text-[2.5rem] text-[1.5rem] lg:mb-[1rem] md:mb-[1rem] mb-0'>Where To Watch John Wick Chapter 4 </h1>
        <p className='line-clamp-3'>There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will eventually be released on Starz,...</p>
        </div>
       <div className='lg:mt-[0.7rem] md:mt-[0.7rem] mt-0 '>
        <h3 className='text-[#e00e0e] lg:text-[1rem] md:text-[1rem] text-[0.5rem]lg:font-normal md:font-normal font-bold'>Movies</h3>
       </div>
      </div>
    </div>
  )
}
