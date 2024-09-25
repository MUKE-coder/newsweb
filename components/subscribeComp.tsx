"use client";
import { Button } from "@/components/ui/button";
import TextInput from "./forminputs/textinput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CreateSuscriber } from "@/actions/subscriberActions";
import { SubscriberProps } from "@/types/types";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function InputWithButton() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriberProps>();

  const [dataErr, setDataErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function onSubmit(data: SubscriberProps) {
    setLoading(true);
    try {
      const res = await CreateSuscriber(data);
      if (res && res.status === 409) {
        setDataErr("The Subscriber with this email already exists.");
        toast.error("The Subscriber with this email already exists.");
      } else if (res && res.status === 201) {
        toast.success("Thank you for subscribing.");
        router.refresh();
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <div>
        <TextInput register={register} errors={errors} name="email" />
        {dataErr && (
          <span className="text-xs my-2 text-red-600">{dataErr}</span>
        )}
      </div>
      {loading ? (
        <Button
          disabled
          className="bg-[#f55b42] flex items-center gap-2"
          type="submit"
        >
          <LoaderCircle className="animate-spin" />
          wait....
        </Button>
      ) : (
        <Button className="bg-[#f55b42]" type="submit">
          Subscribe
        </Button>
      )}
    </form>
  );
}
