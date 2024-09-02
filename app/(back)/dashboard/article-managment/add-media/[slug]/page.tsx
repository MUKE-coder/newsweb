import { getSingleMedia } from '@/actions/mediaActions'
import { AddMediaForm } from '@/components/adminComps/addMedia'
import MediaComp from '@/components/adminComps/mediaComp'
import React from 'react'

export default async function page({params:{slug}}:{params:{slug:string}}) {
  const media = await getSingleMedia({slug})
     return (
      <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 justify-center'>
        <AddMediaForm media={media}/>
        <MediaComp/>
      </div>
    )
  }
