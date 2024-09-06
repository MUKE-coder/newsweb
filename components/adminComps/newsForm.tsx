"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks/hooks";
import EditorComp from "./editor";
import TextArea from "../forminputs/textarea";
import TextInput from "../forminputs/textinput";
import RadioInput from "../forminputs/radioInput";
import SubmitButton from "../forminputs/submitbtn";
import { Button } from "../ui/button";
import ImageInput from "../forminputs/imageUpload";
import FormFooter from "../forminputs/formFooter";
import FormSelectInput from "../forminputs/selectComp";
import Link from "next/link";
import Editor from "./editor";
import { defaultValue } from "./editorComponents/default";
import { createArticle } from "@/actions/articleActions";
import { ArticleProps } from "@/types/types";
import { News } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const radioOptions = [
  {
    label: "Editor's pick",
    id: "editors_pick",
  },
  {
    label: "Must Read",
    id: "must_read",
  },
];
type FormProps ={
  initialData:any,
  categories:any
}
export default function NewsForm({ initialData, categories,mediahouse }: any ) {
  const step = useAppSelector((state) => state.createArticle.step);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(step || 1);
  const [image, setImage] = useState(
    initialData?.imageUrl || "/placeholder.svg"
  );
  const [content, setContent] = useState<any>(
    initialData?.content || defaultValue
  );
  const [selectedCategory, setSelectedCategory] = useState<any>(""); // State for selected category
  const [selectedMedia, setSelectedMedia] = useState<any>(""); // State for selected category

  const selectCategories = categories.map((cat: any) => ({
    value: cat.id, // The ID will be saved
    label: cat.title, // The title will be displayed
  }));
  
  const selectMedia = mediahouse.map((media: any) => ({
    value: media.id, // The ID will be saved
    label: media.title, // The title will be displayed
  }));
  
const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleProps>();

  const handlesStepSwitch = () => {
    setCurrentStep(2);
  };


async  function submitArticle(data:ArticleProps){
  data.content = JSON.stringify(content)
  data.thumbnail = image
  data.categoryId = selectedCategory.value
  data.mediaHouseId = selectedMedia.value
 
  const currentTime = new Date();
   console.log(currentTime)
   function formatTimeDifference(currentTime: Date, createdAt?: Date | string | null, updatedAt?: Date | string | null): string {
    const timeToCompare = updatedAt || createdAt || currentTime;
    const compareDate = typeof timeToCompare === 'string' ? new Date(timeToCompare) : timeToCompare;
  
    if (!(compareDate instanceof Date) || isNaN(compareDate.getTime())) {
      return 'Invalid date';
    }
  
    const timeDifference = currentTime.getTime() - compareDate.getTime(); // time in milliseconds
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  }
  data.readTime = formatTimeDifference(currentTime, data.createdAt, data.updatedAt);

  console.log(`this is the how long ${data.readTime}`);

  setLoading(true)
  try {
    const res = await createArticle(data)
      toast.success("created successfully..")
      router.push("/dashboard/article-managment")
      reset()
  } catch (error) {
    console.log(error)
    toast.error("failed to create article..")
  }finally{
    setLoading(false)
  }
  }

 

  return (
    <div className="p-6 shadow-md rounded-md w-full max-w-6xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Create New Article
      </h2>
      <form onSubmit={handleSubmit(submitArticle)} className="flex flex-col  gap-4">
        {currentStep === 1 && (
          <>
            <div className="flex gap-4">
              <div className="w-[60%] space-y-4">
                {/* Title */}
                <div className="grid gap-4 ">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Article Title"
                    name="title"
                  />
                </div>
                {/* Description */}
                <div className="grid gap-4">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Article Summery"
                    name="description"
                  />
                </div>
                <div className="grid gap-6">
                  <RadioInput
                    radioOptions={radioOptions}
                    label="Featured Options"
                    register={register}
                    name="featuredOption"
                    errors={errors}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Mediahouse */}
                  <div>
                    <FormSelectInput
                      label="All Media"
                      options={selectMedia}
                      option={selectedMedia}
                      setOption={setSelectedMedia}
                      toolTipText="Add Mediahouse"
                      href="/dashboard/inventory/main-categories/new"
                    />
                  </div>

                  {/* Categories */}
                  <div>
                    <FormSelectInput
                      label="All Categories"
                      options={selectCategories}
                      option={selectedCategory}
                      setOption={setSelectedCategory}
                      toolTipText="Add Category"
                      href="/dashboard/inventory/main-categories/new"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[40%]">
                <ImageInput
                  title="Article Image"
                  image={image}
                  setImage={setImage}
                  endpoint="imageUploader"
                />
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-between">
              <Link href="/" className="bg-[#f53b07] text-white py-2 px-4 rounded-md">Close</Link>
              <Button
                type="button"
                onClick={handlesStepSwitch}
                className="!bg-[#f53b07] text-white py-2 px-4 rounded-md"
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
          <div className="flex justify-end">
             <Link href="/" className="bg-[#f53b07] text-white py-2 px-4 rounded-md">Close</Link>
          </div>
            {/* Content */}
            
             
              <Editor  initialValue={content} onChange={setContent} />
            
            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <Button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="!bg-[#f53b07] text-white py-2 px-4 rounded-md"
              >
                back
              </Button>
              <SubmitButton
                className="bg-[#f53b07] text-white py-2 px-4 rounded-md hover:bg-red-700 "
                title="Create Article"
                loadingTitle="Creating..."
                loading={loading}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
}
