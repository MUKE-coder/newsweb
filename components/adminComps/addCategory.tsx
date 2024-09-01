"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TextInput from "../forminputs/textinput";
import { useForm } from "react-hook-form";
import { UploadButton } from "../uploadthing";
import toast from "react-hot-toast";
import Image from "next/image";
import { useState } from "react";
import { CatProps } from "@/types/types";
import SubmitButton from "../forminputs/submitbtn";
import { createCategory, updateCat } from "@/actions/catActions";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";

export function AddCatForm({ singleCat }: CatProps | any) {
  const [image, setImage] = useState("/images/avator.avif");
  const [loading, setLoading] = useState(false);
  const [catErr, setCatErr] = useState("");
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CatProps>({ defaultValues: singleCat });
  async function submitCategory(data: CatProps) {
    const id = singleCat?.id;
    singleCat ? singleCat?.image : image;
    data.image = image;
    const slug = data.title.trim().split(" ").join("-").toLowerCase();
    data.slug = slug;
    setLoading(true);
    if (singleCat) {
     try {
      const update = await updateCat(
        {
          title: data.title,
          image: data.image,
        },
        id
      );
  toast.success("updated successfully")
  router.push("/dashboard")
         router.refresh()
          reset();
     } catch (error) {
     console.log(error) 
     toast.error("failed to update")
     }finally{
      setLoading(false)
     }
    } else {
      try {
        const res = await createCategory(data);
        if (res && res.status === 409) {
          setCatErr("Category already exists....");
        } else if (res && res.status === 201) {
          toast.success("Category created successfully..");
         router.push("/dashboard")
         router.refresh()
          reset();
        }
      } catch (error) {
        toast.error("Failed to create Category.")
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitCategory)}
      className="lg:ml-[17rem] md:ml-[10rem] margin-left mt-14"
    >
      <Card className="bg-[#dae4fdb4]">
        <CardHeader>
          <CardTitle className="text-2xl">Category</CardTitle>
          <CardDescription>
            Enter the category of the news articles.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-3 pt-3">
            <TextInput
              register={register}
              errors={errors}
              label="Category Name"
              name="title"
            />
            {catErr && (
              <span className="text-xs my-2 text-red-600">{catErr}</span>
            )}
          </div>
          <div className="mt-4 lg:flex width-column md:flex justify-center items-center gap-[3rem]">
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
        </CardContent>
        <CardFooter>
          <SubmitButton
            className="w-full"
            title={
              singleCat ? "Update Category" : "Add Category"
            }
            loading={loading}
          />
        </CardFooter>
      </Card>
    </form>
  );
}
