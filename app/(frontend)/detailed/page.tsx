import Details from '@/components/details'
import Header from '@/components/header'
import React from 'react'

export default function page() {
  return (
   <div>
    <Header/>
     <div className='lg:px-16 md:px-12 px-4'>
      <Details/>
    </div>
   </div>
  )
}
