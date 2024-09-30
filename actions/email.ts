"use server";

import { sendNewsletterEmail } from "@/components/email-templates/Newsletter";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
export type MailDataProps = {
  articleTitle: string;
  email: string | string[];
  articleSummary: string;
  thumbnailUrl: string;
  articleBody: string;
  articleLink: string;
  unsubscribeLink: string;
  preferencesLink: string;
};
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendArticleToSingleMail(data: MailDataProps) {
  const {
    articleTitle,
    articleSummary,
    thumbnailUrl,
    articleBody,
    articleLink,
    unsubscribeLink,
    preferencesLink,
  } = data;
  try {
    // Send welcome email
    const res = await resend.emails.send({
      from: "Rubirizi News Edition <jb@comedev.org>",
      to: data.email,
      subject: data.articleTitle,
      html: sendNewsletterEmail(
        articleTitle,
        articleSummary,
        thumbnailUrl,
        articleBody,
        articleLink,
        unsubscribeLink,
        preferencesLink
      ),
    });
    console.log(res);
    revalidatePath("/dashboard/send-mails");
    return {
      success: true,
      message: "Article Sent",
    };
  } catch (error) {
    console.error("Error processing course offer submission:", error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
}
export async function sendArticleToBatchMails(data: MailDataProps) {
  const {
    articleTitle,
    articleSummary,
    thumbnailUrl,
    articleBody,
    articleLink,
    unsubscribeLink,
    preferencesLink,
  } = data;
  try {
    const mails = data.email as string[];
    const res = await resend.batch.send(
      mails.map((email) => {
        return {
          from: "Rubirizi News Edition <jb@comedev.org>",
          to: email,
          subject: data.articleTitle,
          html: sendNewsletterEmail(
            articleTitle,
            articleSummary,
            thumbnailUrl,
            articleBody,
            articleLink,
            unsubscribeLink,
            preferencesLink
          ),
        };
      })
    );
    console.log(res);
    return {
      success: true,
      message: "Article Sent",
    };
  } catch (error) {
    console.error("Error processing course offer submission:", error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
}
