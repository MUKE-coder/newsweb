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

export default function NewsForm({initialData}:any) {
  const step = useAppSelector((state) => state.createArticle.step);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(step || 1);
  const [image,setImage] = useState(initialData?.imageUrl || "/placeholder.svg")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlesStepSwitch = () => {
    setCurrentStep(2);
  };

  return (
    <div className="p-6 shadow-md rounded-md w-full max-w-6xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Create New Article
      </h2>
      <form className="flex flex-col gap-6">
        {currentStep === 1 && (
          <>
           <div className="flex gap-4">
            <div className="w-[50%]">
               {/* Title */}
            <div className="grid gap-4">
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
                label="Article Description"
                name="description"
              />
            </div>
            <div className="grid gap-6">
              <RadioInput
                radioOptions={radioOptions}
                label="Featured Options"
                register={register}
                name="featured_option"
                errors={errors}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Mediahouse */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mediahouse
                </label>
                <select
                  {...register("mediahouse")}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="news">News</option>
                  <option value="magazine">Magazine</option>
                  <option value="blog">Blog</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Categories
                </label>
                <select
                  {...register("category")}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="technology">Technology</option>
                  <option value="health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="sports">Sports</option>
                </select>
              </div>
            </div>
            </div>
            <div className="w-[50%]">
            <ImageInput
              title="Article Image"
              image={image}
              setImage={setImage}
              endpoint="articleImage"
  />
            </div>
           </div>

            {/* Continue Button */}
            <div>
              <Button
                type="button"
                onClick={handlesStepSwitch}
                className="w-full !bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <EditorComp />
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-center gap-8">
              <Button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="w-full !bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                back
              </Button>
              <SubmitButton
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
