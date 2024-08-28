import HeaderComp from '@/components/adminComps/headerComp'
import SideMenu from '@/components/adminComps/sideMenu'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
   
   <div  className="">
    <HeaderComp/>
   <div className="flex gap-[21.5rem] flex-layout">
   <div>
   <SideMenu/>
   </div>
   <div className='lg:mt-[4rem] md:mt-[4rem] mt-[1.3rem]'>
   {children}
   </div>
   </div>
   </div>
     
 )
}