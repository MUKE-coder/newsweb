"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

  import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession, Session } from "next-auth";
import { signOut } from "next-auth/react";
import { getUserData } from '@/actions/userActions';

export default function DropDownComp({ session }: { session: Session }) {
// const userData = await getUserData() 
// console.log(userData)
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        {/* <CircleUser className="h-5 w-5" /> */}
        <Image
          width={262}
          height={192}
          src={session.user.image as string}
          alt="User Image"
          className="h-full w-full rounded-full"
        />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem> <Link href={`/edit-user/${session.user.id}`}>Settings</Link> </DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
