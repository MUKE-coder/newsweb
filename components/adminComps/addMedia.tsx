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
import { CatProps, MediaProps } from "@/types/types";
import SubmitButton from "../forminputs/submitbtn";
import { createCategory, updateCat } from "@/actions/catActions";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import { createMedia, updateMedia } from "@/actions/mediaActions";

export function AddMediaForm({
  media,
}:
  | {
      media: MediaProps;
    }
  | undefined
  | null
  | any) {
  console.log(media);
  const [image, setImage] = useState(media?.image || "/images/avator.avif");
  console.log(image);
  const [loading, setLoading] = useState(false);
  const [mediaErr, setMediaErr] = useState("");
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<MediaProps>({ defaultValues: media });
  async function submitMedia(data: MediaProps) {
    const id = media?.id;
    data.image = image;
    const slug = data.title.trim().split(" ").join("-").toLowerCase();
    data.slug = slug;
    setLoading(true);
    if (media) {
      const mediaUpdate = await updateMedia(
        {
          image: data.image,
          title: data.title,
          slug: data.slug,
        },
        id
      );
      toast.success("media updated successsfully.");
      console.log(mediaUpdate);
      router.refresh();
      router.push("/dashboard/article-managment/add-media");
    } else {
      try {
        const res = await createMedia(data);
        if (res && res.status === 409) {
          setMediaErr("media already exists....");
        } else if (res && res.status === 201) {
          toast.success("Media created successfully..");
          router.refresh();
          router.push("/dashboard/article-managment/add-media");
          reset();
        }
      } catch (error) {
        toast.error("Failed to create media.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(submitMedia)} className="">
      <Card className="bg-[#dae4fdb4]">
        <CardHeader>
          <CardTitle className="text-2xl">Media</CardTitle>
          <CardDescription>
            Enter the media of the news articles.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-3 pt-3">
            <TextInput
              register={register}
              errors={errors}
              label="Mediahouse Name"
              name="title"
            />
            {mediaErr && <span className="text-red-600">{mediaErr}</span>}
          </div>
          <div className="mt-4 lg:flex width-column md:flex justify-center items-center gap-[3rem]">
            <UploadButton
              className="bg-[#f53b07] px-3 py-1 rounded-md"
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
                className="w-full rounded-md  object-cover mb-4"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton
            className="w-full"
            title={media ? "Update Mediahouse" : "Add Mediahouse"}
            loading={loading}
          />
        </CardFooter>
      </Card>
    </form>
  );
}
