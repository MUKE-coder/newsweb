"use server";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { UserDetails, UserProps } from "@/types/types";
import { User } from "@prisma/client";

export async function registerUser(data: UserProps) {
  try {
    const { email, firstName, lastName, phone, password, userName, image } =
      data;
    const existingUser = await db.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return {
        data: null,
        error: `user with this ${email} already exists`,
        status: 409,
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
        password: hashedPassword,
        userName,
        image,
      },
    });
    return {
      data: newUser,
      status: 201,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

export async function editUserData(data: UserDetails,  id :string) {
  // console.log(id, data);
  try {
    const assignment = await db.user.update({
      where: {
        id,
      },

      data,
    });
    return assignment;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleUserData({id}:UserProps | User | any){
try {
  const userData = await db.user.findUnique({
    where:{
      id:id
    }
  })
// console.log(userData)
return userData;
} catch (error) {
console.log(error)  
}
}

export async function getUserData(){
  try {
   const userData = await db.user.findMany() 
  //  console.log(userData)
   return userData 
  } catch (error) {
   console.log(error) 
  }
}

