"use server"

import { db } from "@/lib/db";
import { MediaProps } from "@/types/types";


export async function createMedia(data: MediaProps) {
    try {
    const{slug,image,title} = data
    const existingMedia = await db.mediaHouse.findUnique({
      where:{slug}
    })
      if (existingMedia) {
        return {
          data: null,
          error: `the above ${slug} category already  exists`,
          status: 409,
        };
      }
  
      const newMedia = await db.mediaHouse.create({
        data: {
          title,
          slug,
          image,
        },
      });
     
      return {
        data: newMedia,
        error: null,
        status: 201,
      };
    } catch (error) {
      console.log(error);
    }
  }

export async function getSingleMedia(id:string){
try {
const singleMedia = await db.mediaHouse.findUnique({
  where:{id:id}
})
console.log(singleMedia)
return singleMedia
} catch (error) {
  console.log(error)
}
}
export async function getMedia(){
try {
const getMedia = await db.mediaHouse.findMany()
return getMedia
} catch (error) {
  console.log(error)
}
}
export async function deleteMedia({id}:string | MediaProps | any){
try {
 const deltedItem = await db.mediaHouse.delete({
  where:{id:id}
 })
 console.log(deltedItem)
return deltedItem;
} catch (error) {
 console.log(error) 
}
}