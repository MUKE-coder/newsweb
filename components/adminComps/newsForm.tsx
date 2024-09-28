"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks/hooks";
import TextArea from "../forminputs/textarea";
import TextInput from "../forminputs/textinput";
import RadioInput from "../forminputs/radioInput";
import SubmitButton from "../forminputs/submitbtn";
import { Button } from "../ui/button";
import ImageInput from "../forminputs/imageUpload";
import FormSelectInput from "../forminputs/selectComp";
import Link from "next/link";
import Editor from "./editor";
import { defaultValue } from "./editorComponents/default";
import { createArticle, updateData } from "@/actions/articleActions";
import { ArticleProps } from "@/types/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
type FormProps = {
  initialData: any;
  categories: any;
};
export default function NewsForm({ categories, mediahouse, initialData }: any) {
  const { data: session } = useSession<any>();
  const step = useAppSelector((state: any) => state.createArticle.step);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(step || 1);
  const [image, setImage] = useState(
    initialData?.thumbnail || "/placeholder.svg"
  );
  const [banner, setBanner] = useState(
    initialData?.banner || initialData?.thumbnail
  );

  const [content, setContent] = useState<any>(
    initialData?.content ? JSON.parse(initialData.content) : defaultValue
  );
  const [selectedCategory, setSelectedCategory] = useState<any>(
    initialData?.categoryId
      ? { value: initialData.categoryId, label: initialData.category?.title }
      : " "
  );
  const [selectedMedia, setSelectedMedia] = useState<any>(
    initialData?.mediaHouseId
      ? {
          value: initialData.mediaHouseId,
          label: initialData.mediaHouse?.title,
        }
      : " "
  );

  const selectCategories = categories.map((cat: any) => ({
    value: cat.id, // The ID will be saved
    label: cat.title, // The title will be displayed
  }));

  const selectMedia = mediahouse.map((media: any) => ({
    value: media.id, // The ID will be saved
    label: media.title, // The title will be displayed
  }));

  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleProps>({ defaultValues: initialData });

  const handlesStepSwitch = () => {
    setCurrentStep(2);
  };

  const [creationTime, setCreationTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  // ... (rest of your existing code)

  useEffect(() => {
    if (!creationTime) {
      setCreationTime(new Date());
    }

    const timer = setInterval(() => {
      if (creationTime) {
        const now = new Date();
        const diff = now.getTime() - creationTime.getTime();
        setElapsedTime(formatTimeDifference(diff));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [creationTime]);

  const formatTimeDifference = (diff: number): string => {
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  };

  async function submitArticle(data: ArticleProps) {
    const id = initialData?.id;
    data.content = JSON.stringify(content);
    data.thumbnail = initialData ? initialData.thumbnail : image;
    data.banner = initialData ? initialData.banner : banner;
    data.categoryId = selectedCategory?.value;
    data.mediaHouseId = selectedMedia?.value;
    data.readTime = elapsedTime;
    data.userId = session?.user?.id;
    console.log(data, "form data");
    if (initialData) {
      try {
        setLoading(true);
        const updatedArticle = await updateData(
          {
            title: data.title,
            description: data.description,
            content: JSON.stringify(content),
            thumbnail: image,
            banner: banner,
            categoryId: selectedCategory?.value,
            mediaHouseId: selectedMedia?.value,
            readTime: elapsedTime,
            userId: session?.user?.id,
            featuredOption: data.featuredOption,
          },
          id
        );
        toast.success("Article updated successfully");
        router.push("/dashboard/article-managment");
        router.refresh();
      } catch (error) {
        toast.error("Failed to update. Please try again..");
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const res = await createArticle(data);
        toast.success("Created successfully");
        router.push("/dashboard/article-managment");
        router.refresh();
        reset();
      } catch (error) {
        console.error(error);
        toast.error("Failed to create article");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="lg:p-6 md:p-6 p-2 shadow-md rounded-md w-full max-w-6xl">
      <h2 className="lg:text-3xl md:text-3xl text-2xl font-bold mb-6 text-gray-800">
        Create New Article
      </h2>
      <form
        onSubmit={handleSubmit(submitArticle)}
        className="flex flex-col  gap-4"
      >
        {currentStep === 1 && (
          <>
            <div className="flex gap-4 flex-container">
              <div className="lg:w-[60%] md:w-[60%] w-[100%] space-y-4">
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
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                  {/* Mediahouse */}
                  <div>
                    <FormSelectInput
                      label="All Media"
                      options={selectMedia}
                      option={selectedMedia}
                      setOption={setSelectedMedia}
                      toolTipText="Add Mediahouse"
                      href="/dashboard/article-managment/add-media"
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
                      href="/dashboard/article-managment/add-category"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] md:w-[40%] w-[100%] grid grid-cols-1 gap-3">
                <ImageInput
                  title="Article Thumbnail"
                  image={image}
                  setImage={setImage}
                  endpoint="imageUploader"
                  description="Please the dimensions of this thumbnail should be of 800 by 600"
                />
                <ImageInput
                  title="Article Banner"
                  image={banner}
                  setImage={setBanner}
                  endpoint="imageUploader"
                  description="Please the dimensions of this banner should be of 1200 by 627"
                />
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-between">
              <Link
                href="/dashboard/article-managment"
                className="bg-[#f53b07] text-white py-2 px-4 rounded-md"
              >
                Close
              </Link>
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
              <Link
                href="/dashboard/article-managment"
                className="bg-[#f53b07] text-white py-2 px-4 rounded-md"
              >
                Close
              </Link>
            </div>
            {/* Content */}

            <Editor
              isEditable={true}
              initialValue={content}
              onChange={setContent}
            />

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
                title={initialData ? "Update Article" : "Create Article"}
                loadingTitle={initialData ? "Updating..." : "Creating..."}
                loading={loading}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
}
