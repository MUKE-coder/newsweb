"use client";
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
import toast from "react-hot-toast";
import { useState } from "react";
import { CatProps } from "@/types/types";
import SubmitButton from "../forminputs/submitbtn";
import { createCategory, updateCat } from "@/actions/catActions";
import { useRouter } from "next/navigation";
import ImageInput from "../forminputs/imageUpload";

export function AddCatForm({ singleCat }: CatProps | any) {
  const [image, setImage] = useState(singleCat?.image ||  "/placeholder.svg");
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
  router.push("/dashboard/article-managment/add-category")
         router.refresh()
          reset();
          // window.location.reload()
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
         router.push("/dashboard/article-managment/add-article")
         router.refresh()
          reset();
          window.location.reload()
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
      className=""
    >
      <Card className="bg-[#dae4fdd5]">
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
          <div className="">
          <ImageInput
                  title="Article Image"
                  image={image}
                  setImage={setImage}
                  endpoint="imageUploader"
                />
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
