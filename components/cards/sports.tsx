import React from 'react'
import CardComp from './cardComp'

export default function SportsComp() {
  return (
    <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-1 grid-cols-1'>
        <CardComp
      image='/images/john.avif'
      title='Where To Watch John Wick Chapter 4'
      category='#'
       link='/detailed'
       time='#'  
     description='There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will'
      />
        <CardComp
      image='/images/john.avif'
      title='Where To Watch John Wick Chapter 4'
      category='#'
       link='/detailed'
       time='#'  
     description='There has been an official announcment about John Wick: Chapter 4s streaming release. However given its a lionsgate film John Wick: chapter 4 will'
      />
    </div>
  )
}
