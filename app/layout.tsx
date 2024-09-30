import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Rubirizi news",
    "latest news Rubirizi",
    "Rubirizi Bulletin",
    "Rubirizi news updates",
    "local news Rubirizi",
    "breaking news Rubirizi",
    "news from Rubirizi",
    "Rubirizi stories",
    "news",
    "international news",
    "Rubirizi community news",
    "current events Rubirizi",
    "Rubirizi online news",
    "Uganda news Rubirizi",
    "newsweb Rubirizi",
    "Rubirizi headlines",
    "Rubirizi regional news",
    "Rubirizi",
    "sports",
  ],
  authors: [
    {
      name: "Ribirizi",
      url: "https://newsweb-app.vercel.app/",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  creator: "Rubirizi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div>
        <Providers>
          <body className="body-font background-color">{children}</body>
        </Providers>
      </div>
    </html>
  );
}
