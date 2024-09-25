"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../forminputs/textinput";
import { useForm } from "react-hook-form";
import SubmitButton from "../forminputs/submitbtn";
import { UploadButton } from "../uploadthing";
import Image from "next/image";
import { UserProps } from "@/types/types";
import { registerUser } from "@/actions/userActions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupForm({ role }: { role: string }) {
  // console.log(singleUserData)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProps>();

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("/placeholder.svg");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();
  console.log(image);

  async function submitUser(data: UserProps) {
    data.image = image;
    data.role = role;
    data.userName = `${data.firstName} ${data.lastName}`;
    setLoading(true);
    try {
      const res = await registerUser(data);
      if (res && res.status === 409) {
        setEmailError("Sorry, Email already exists in our database.");
        toast.error("email already exists");
      } else if (res && res.status === 201) {
        reset();
        router.push("/login");
        toast.success("successfully registered");
      } else {
        alert("network problem");
        toast.error("something went wrong please try again");
        console.log(res.error);
      }
    } catch (error) {
      toast.error("something went wrong please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-[100%] mt-10 rounded-lg  lg:px-8 md:px-8 px-4 py-8 box-shadow bg-white">
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
          <p className="text-gray-500">
            Enter your details below and create an account to get started
          </p>
        </div>
      </div>
      <form className="mt-4" onSubmit={handleSubmit(submitUser)} action="">
        <div className="mt-4 flex flex-container  justify-center items-center gap-[3rem]">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              toast.success("Upload Completed");
              setImage(res[0].url);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              toast.error(`ERROR! ${error.message}`);
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
            label="Last Name"
            name="lastName"
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
        {emailError && (
          <span className="text-xs my-2 text-red-600">{emailError}</span>
        )}
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
            className="w-full"
            title="Register"
            loading={loading}
            loadingTitle="signing-Up..."
          />
        </div>
      </form>
      <div className="mt-4 text-center">
        <p className="text-[0.9rem]">
          Already have an account{" "}
          <Link className="text-blue-700 " href="/login">
            Login?
          </Link>
        </p>
        {role === "user" ? (
          <p className="text-[0.9rem]">
            Register as an{" "}
            <Link className="text-blue-700 " href="/article-writer-form">
              article writer?
            </Link>
          </p>
        ) : (
          <p className="text-[0.9rem]">
            Register as a{" "}
            <Link className="text-blue-700 " href="/signup">
              normal user?
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
