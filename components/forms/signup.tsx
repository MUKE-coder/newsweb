"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../forminputs/textinput";
import { useForm } from "react-hook-form";
import PasswordInput from "../forminputs/passwordinput";
import SubmitButton from "../forminputs/submitbtn";
import { UploadButton, UploadDropzone } from "../uploadthing";
import Image from "next/image";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading,setLoading] = useState(false);
  const [image,setImage] = useState("/images/avator.avif")


function submitUser(data:any){
console.log(data)
data.image = image
}




  return (
    <div className="w-[100%] mt-10 border-solid py-3 px-4 box-shadow ">
      <div>
        <div className="text-[#f45b42]">
          <Link
            href="#"
            className="flex items-center logoFont gap-2 text-lg font-semibold md:text-base"
          >
            <span className="text-[0.8rem]">Lubiliizi Bulletin</span>
          </Link>
        </div>
        <div>
          <h1 className="text-[2rem]">SignUp</h1>
          <p className="text-gray-500">Enter your details below and create an account to get started</p>
        </div>
      </div>
      <form className="mt-4" onSubmit={handleSubmit(submitUser)} action="">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py- gap-3 pt-3">
          <TextInput
            register={register}
            errors={errors}
            label="First Name"
            name="firstName"
          />
          <TextInput
            register={register}
            errors={errors}
            label="Second Name"
            name="secondName"
          />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py- gap-3 pt-3">
          <TextInput
            register={register}
            errors={errors}
            label="Email Address"
            name="email"
          />
          <TextInput
            register={register}
            errors={errors}
            label="Phone Number"
            name="phone"
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
        <div className="mt-4 flex justify-center items-center gap-[3rem]">
        <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
          setImage(res[0].url)
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
     <div className="w-20 h-20 rounded-full">
     <Image
                  src={image}
                  alt="profile"
                  width={300}
                  height={300}
                  className="w-full rounded-full  object-cover mb-4"
                />
     </div>
        </div>
        <div className="mt-4 flex justify-end">
       <SubmitButton
       title="Register"
       loading={loading}
       loadingTitle="signing-Up..."
       />
        </div>
      </form>
      <div className="mt-4 text-center">
        <p className="text-[0.9rem]">Already have an account <Link className="text-blue-700 " href="/login">Login?</Link></p>
      </div>
    </div>
  );
}
