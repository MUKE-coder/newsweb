"use server";

import { db } from "@/lib/db";
import { SubscriberProps } from "@/types/types";
import { revalidatePath } from "next/cache";

//create a subscriber
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
    revalidatePath("/dashboard/subscribers");
    return {
      data: newSubData,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}

//get all subscribers
export async function fetchSubscribers() {
  try {
    const allSubscribers = await db.subscriber.findMany();
    return allSubscribers;
  } catch (error) {
    console.log(error);
  }
}

//delete a subscriber
export async function deleteSubscriber(id: string) {
  try {
    const deletedSub = await db.subscriber.delete({
      where: { id },
    });
    revalidatePath("/dashboard/subscribers");
    console.log(deletedSub);
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}

//finding the latest subscriber
export async function fetchLatestSubscriber() {
  try {
    const latestSubscriber = await db.subscriber.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    if (!latestSubscriber) {
      return {
        data: null,
        error: "No subscribers found",
        status: 404,
      };
    }

    return {
      data: latestSubscriber,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error("Error fetching latest subscriber:", error);
    return {
      data: null,
      error: "Failed to fetch latest subscriber",
      status: 500,
    };
  }
}
