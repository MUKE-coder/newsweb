"use server"
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { UserProps } from "@/types/types";

export async function registerUser(data: UserProps) {
  try {
    const { email, firstName, lastName, phone, password, userName,image } = data;
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
        image
      },
    });
  return{
    data:newUser,
    status:201,
    error:null
  }
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}
