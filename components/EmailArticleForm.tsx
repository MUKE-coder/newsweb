"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(
  () => import("@/components/forminputs/QuillEditor"),
  {
    ssr: false,
  }
);
import FormSelectInput from "./forminputs/selectComp";
import { News, Subscriber } from "@prisma/client";
import {
  MailDataProps,
  sendArticleToBatchMails,
  sendArticleToSingleMail,
} from "@/actions/email";
import toast from "react-hot-toast";

export type SelectOption = {
  labe: string;
  value: string;
};

export default function EmailArticleForm({
  rawArticles,
  rawRecipients,
}: {
  rawArticles: News[];
  rawRecipients: Subscriber[];
}) {
  const initArr = [
    {
      label: "All Subscribers",
      value: "all",
    },
  ];
  const recipients = [
    ...initArr,
    ...rawRecipients.map((item) => {
      return {
        label: item.email,
        value: item.email,
      };
    }),
  ];
  const articles = rawArticles.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });

  const [emailBody, setEmailBody] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState<any>(
    recipients[0]
  );
  const [selectedArticle, setSelectedArticle] = useState<any>(articles[0]);

  const actualSelectedArticle = rawArticles.find(
    (article) => article.id === selectedArticle.value
  );
  const [content, setContent] = useState(null);
  // console.log(actualSelectedArticle);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    const isAll = selectedRecipient.value === "all" ? true : false;
    const data: MailDataProps = {
      articleTitle: actualSelectedArticle?.title ?? "",
      email: isAll
        ? rawRecipients.map((item) => {
            return item.email;
          })
        : selectedRecipient.value,
      articleSummary: actualSelectedArticle?.description ?? "",
      thumbnailUrl: actualSelectedArticle?.thumbnail ?? "",
      articleBody: content ?? "",
      articleLink: `${baseUrl}/detailed/${actualSelectedArticle?.id}`,
      unsubscribeLink: "#",
      preferencesLink: "#",
    };
    e.preventDefault();
    setIsSending(true);
    // Here you would implement the actual email sending logic

    try {
      if (isAll) {
        const res = await sendArticleToBatchMails(data);
        console.log(res);
        setIsSending(false);
        toast.success("Email sent successfully!");
        setContent(null);
      } else {
        const res = await sendArticleToSingleMail(data);
        console.log(res);
        setIsSending(false);
        toast.success("Email sent successfully!");
        setContent(null);
      }
    } catch (error) {
      setIsSending(false);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-4 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Email Article to Subscribers
      </h2>

      <div className="space-y-2">
        <FormSelectInput
          label="Subscribers"
          options={recipients}
          option={selectedRecipient}
          setOption={setSelectedRecipient}
        />
      </div>

      <div className="space-y-2">
        <FormSelectInput
          label="Articles"
          options={articles}
          option={selectedArticle}
          setOption={setSelectedArticle}
        />
      </div>

      <div className="space-y-2">
        <QuillEditor
          label="Write the Content of the Meeting"
          className=""
          value={content}
          onChange={setContent}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSending}>
        {isSending ? "Sending..." : "Send Email"}
      </Button>
    </form>
  );
}
