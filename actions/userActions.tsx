"use server";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { UserDetails, UserProps } from "@/types/types";
import { User } from "@prisma/client";
import toast from "react-hot-toast";

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

export async function editUserData(data: UserDetails, id: string) {
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

export async function getSingleUserData({ id }: UserProps | User | any) {
  try {
    const userData = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    // console.log(userData)
    return userData;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserData() {
  try {
    const userData = await db.user.findMany();
    //  console.log(userData)
    return userData;
  } catch (error) {
    console.log(error);
  }
}

// Assuming you have a db connection setup

// ... other actions ...

// export async function updateUserPassword(
//   userId: string,
//   currentPassword: string,
//   newPassword: string
// ) {
//   // Fetch the user
//   const user = await db.user.findUnique({ where: { id: userId } });

//   if (!user) {
//     throw new Error("User not found");
//   }

//   // Verify current password
//   const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

//   if (!isPasswordValid) {
//     throw new Error("Current password is incorrect");
//   }

//   // Hash the new password
//   const hashedPassword = await bcrypt.hash(newPassword, 10);

//   // Update the user's password
//   await db.user.update({
//     where: { id: userId },
//     data: { password: hashedPassword },
//   });

//   return { success: true, message: "Password updated successfully" };
// }

export async function updateUserPassword(
  userId: string,
  currentPassword: string,
  newPassword: string
) {
  try {
    // Fetch the user
    const user = await db.user.findUnique({ where: { id: userId } });

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      toast.error("Current password is incorrect");
      return { success: false, message: "Current password is incorrect" };
    }

    // Check if the new password is different from the current password
    const isNewPasswordSame = await bcrypt.compare(newPassword, user.password);

    if (isNewPasswordSame) {
      toast.error("New password must be different from the current password");
      return {
        success: false,
        message: "New password must be different from the current password",
      };
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    await db.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return { success: true, message: "Password updated successfully" };
  } catch (error) {
    toast.error("Error updating password");
    console.error("Error updating password:", error);
    return {
      success: false,
      message: "An error occurred while updating the password",
    };
  }
}
