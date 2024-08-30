import { AddCatForm } from '@/components/adminComps/addCategory'
import CatsComp from '@/components/adminComps/catsComp'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center py-4 px-4 w-full'>
     < AddCatForm/>
    </div>
  )
}
