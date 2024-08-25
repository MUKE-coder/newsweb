"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../forminputs/textinput";
import { useForm } from "react-hook-form";
import PasswordInput from "../forminputs/passwordinput";
import SubmitButton from "../forminputs/submitbtn";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading,setLoading] = useState(false);
  return (
    <div className="w-[100%] mt-10 border-solid py-3 px-4 box-shadow text-center">
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
          <h1 className="text-[2rem]">Welcome Back</h1>
          <p className="text-gray-500">We are glad that you are back👏. Please login to your account</p>
        </div>
      </div>
      <form className="mt-4" action="">
        <div className="grid  grid-cols-1 py- gap-3 pt-3">
          <TextInput
            register={register}
            errors={errors}
            label="Email Address"
            name="email"
          />
        </div>
        <div>
        <TextInput
            register={register}
            errors={errors}
            label="Password"
            name="password"
          />
        </div>
        <div className="mt-4 flex justify-end">
       <SubmitButton
       title="Login"
       loading={loading}
       loadingTitle="loging-in..."
       />
        </div>
      </form>
      <div className="mt-4">
        <p className="text-[0.9rem]">Don{"'"}t have an account <Link className="text-blue-700 " href="/signup">Signup?</Link></p>
      </div>
    </div>
  );
}
