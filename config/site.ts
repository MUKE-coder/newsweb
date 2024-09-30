export const siteConfig = {
  name: "Rubirizi Bulletin",
  title: "Rubirizi News Bulletin",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://newsweb-app.vercel.app/",
  ogImage: "/Stay.png",
  description:
    "Stay informed with the latest news, stories, and insights from Rubirizi and beyond. Rubirizi Bulletin offers in-depth coverage, timely updates, and a fresh perspective on the topics that matter most.",
  links: {
    twitter: "https://twitter.com/Rubirizi Bulletin",
    github: "https://github.com/Rubirizi Bulletin/",
  },
};

export type SiteConfig = typeof siteConfig;
