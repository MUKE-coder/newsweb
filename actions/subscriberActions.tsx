"use server";

import { db } from "@/lib/db";
import { SubscriberProps } from "@/types/types";


export async function CreateSuscriber(data: SubscriberProps) {
  try {
    const { email } = data;
    const existingSub = await db.subscriber.findUnique({
      where: {
        email,
      },
    });
    if (existingSub) {
      return {
        data: null,
        error: `The Subscriber with this email ${email} already exists.`,
        status: 409,
      };
    }
    const newSubData = await db.subscriber.create({
      data: { email },
    });
    console.log(newSubData)
    return {
      data: newSubData,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}
