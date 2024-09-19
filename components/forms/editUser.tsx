"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../forminputs/textinput";
import { useForm } from "react-hook-form";
import PasswordInput from "../forminputs/passwordinput";
import SubmitButton from "../forminputs/submitbtn";
import { UploadButton, UploadDropzone } from "../uploadthing";
import Image from "next/image";
import { SingleUserDetails, UserProps } from "@/types/types";
import { CodeSquare, Download, X } from "lucide-react";
import { editUserData, registerUser } from "@/actions/userActions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditUser({ singleUserData }: SingleUserDetails) {
  // console.log(singleUserData)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProps>({ defaultValues: singleUserData });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(singleUserData.image);
  // const [imageuR, setImage] = useState(singleUserData.image);
  const [emailError, setEmailError] = useState("");
  const router = useRouter();
  const id = singleUserData.id;
  singleUserData ? singleUserData.image : image;

  async function submitUser(data: UserProps) {
    data.image = image;
    data.userName = `${data.firstName} ${data.lastName}`;
    setLoading(true);
    console.log(data);
    // try {
    // const res = await registerUser(data)
    // if (res && res.status === 409) {
    //   setEmailError("Sorry, Email already exists in our database.");
    //   toast.error("email already exists")
    // } else if (res && res.status === 201) {
    //   reset();
    //   router.push("/login");
    //   toast.success("successfully registered")
    // }else {
    //   alert("network problem")
    //   toast.error("something went wrong please try again")
    //   console.log(res.error);

    // }
    // } catch (error) {
    //   toast.error("something went wrong please try again")
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }

    try {
      const update = await editUserData(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          image: data.image,
          userName: data.userName,
        },
        id
      );
      setLoading(false);
        toast.success("profile updated successfully")
        router.push("/")
        router.refresh()
      
    } catch (error) {
      console.log(error);
      setLoading(false);
   
      toast.error("Failed to update the profile")
    }
  }

  function deleteImage() {
    setImage("/images/user.avif");
  }

  return (
    <div className="w-[100%] mt-10 rounded-lg  lg:px-8 md:px-8 px-3 py-8 box-shadow bg-white">
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
          <h1 className="text-[2rem]">Update Details</h1>
          <p className="text-gray-500">
            Enter your updated details below and enhance your account to reach
            your expectations
          </p>
        </div>
      </div>
      <form className="mt-4" onSubmit={handleSubmit(submitUser)} action="">
      <div className="mt-4 flex flex-container2 justify-center  gap-[2rem]">
        <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          toast.success("Upload Completed")
          setImage(res[0].url)
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.message}`);
        }}
      />
     <div className="w-20 h-20 relative rounded-full">
     {image.startsWith('/images/') ? (
              ""
            ) : (
              <button
                type="button"
                className="absolute right-0 bg-black rounded-full"
                onClick={deleteImage}
              >
                <X className="text-white" />
              </button>
            )}
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
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 py- gap-3 pt-3">
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
        <div></div>
        
        <div className="mt-4 flex justify-end">
          <SubmitButton
            className="w-full"
            title="Update profile"
            loading={loading}
            loadingTitle="Updating..."
          />
        </div>
      </form>
    </div>
  );
}
