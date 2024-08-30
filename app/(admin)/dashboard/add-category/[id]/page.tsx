"use server"
import { getSingleCat } from '@/actions/catActions'
import { AddCatForm } from '@/components/adminComps/addCategory'
import CatsComp from '@/components/adminComps/catsComp'
import { Category } from '@prisma/client'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {
  const singleCat = await getSingleCat({id})
  // console.log(singleCat)
    return (
    <div className='flex justify-center items-center py-4 px-4 w-full'>
     < AddCatForm singleCat={singleCat}/>
    </div>
  )
}
