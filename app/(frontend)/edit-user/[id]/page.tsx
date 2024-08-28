"use server"
import { getSingleUserData, getUserData } from '@/actions/userActions'
import EditUser from '@/components/forms/editUser'
import SignupForm from '@/components/forms/signup'
import { UserProps } from '@/types/types'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {
  console.log(`this the ${id}`)
const singleUserData = await getSingleUserData({id})
// console.log(singleUserData)
// const user = await getUserData()
// console.log(`this user ${user}`)
  return (
    <div className='max-w-screen-sm mx-auto px-4 '>
    <EditUser singleUserData={singleUserData} />
  </div>
  )
}
