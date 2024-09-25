"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../forminputs/textinput";
import { useForm } from "react-hook-form";
import SubmitButton from "../forminputs/submitbtn";
import { signIn } from "next-auth/react";
import { UserProps } from "@/types/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProps>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function loginUser(data: UserProps) {
    console.log(data);
    try {
      setLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
      } else {
        // Sign-in was successful

        reset();
        setLoading(false);
        toast.success("Login Successful");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <div className="w-[100%] mt-10 border-solid rounded-lg py-3 px-4 box-shadow bg-white text-center">
      <div>
        <div className="text-[#f45b42] text-center">
          <Link
            href="#"
            className="flex items-center justify-center logoFont gap-2 text-lg font-semibold md:text-base"
          >
            <span className="text-[0.8rem]">Lubiliizi Bulletin</span>
          </Link>
        </div>
        <div>
          <h1 className="text-[2rem]">Login</h1>
          {/* <p className="text-gray-500">
            We are glad that you are back👏. Please login to your account
          </p> */}
        </div>
      </div>
      <form className="mt-4" onSubmit={handleSubmit(loginUser)} action="">
        <div className="grid  grid-cols-1  gap-3 pt-3">
          <TextInput
            register={register}
            errors={errors}
            label="Email Address"
            name="email"
          />
        </div>
        <div className="mt-4">
          <TextInput
            register={register}
            errors={errors}
            label="Password"
            name="password"
          />
        </div>
        <div className="mt-4 flex">
          <SubmitButton
            className="w-full"
            title="Login"
            loading={loading}
            loadingTitle="loging-in..."
          />
        </div>
      </form>
      <div className="mt-4">
        {/* <p className="text-[0.9rem]">
          Don{"'"}t have an account{" "}
          <Link className="text-blue-700 " href="/signup">
            Signup?
          </Link>
        </p> */}
      </div>
    </div>
  );
}
