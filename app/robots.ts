import { siteConfig } from "@/config/site";

export default function robots() {
  const baseUrl = siteConfig.url;
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/dashboard",
        "/categories",
        "/dashboard/article-managment",
        "all-articles",
        "/dashboard/subscribers",
        "/dashboard/send-emails",
        "/detailed",
        "/editors-pick-articles",
        "/must-read-articles",
        "/dashboard/settings",
      ],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
