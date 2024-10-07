// import type { Metadata } from "next";
// import "./globals.css";
// import Providers from "@/components/providers";
// import { siteConfig } from "@/config/site";
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.title,
//     template: `%s - ${siteConfig.title}`,
//   },
//   metadataBase: new URL(siteConfig.url),
//   description: siteConfig.description,
//   keywords: [
//     "Rubirizi news",
//     "latest news Rubirizi",
//     "Rubirizi Bulletin",
//     "Rubirizi news updates",
//     "local news Rubirizi",
//     "breaking news Rubirizi",
//     "news from Rubirizi",
//     "Rubirizi stories",
//     "news",
//     "international news",
//     "Rubirizi community news",
//     "current events Rubirizi",
//     "Rubirizi online news",
//     "Uganda news Rubirizi",
//     "newsweb Rubirizi",
//     "Rubirizi headlines",
//     "Rubirizi regional news",
//     "Rubirizi",
//     "sports",
//   ],
//   authors: [
//     {
//       name: "Ribirizi",
//       url: "https://newsweb-app.vercel.app/",
//     },
//   ],
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//     },
//   },
//   creator: "Rubirizi",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//     images: [
//       {
//         url: siteConfig.ogImage,
//         width: 1200,
//         height: 630,
//         alt: siteConfig.name,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [siteConfig.ogImage],
//     creator: "@shadcn",
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: `${siteConfig.url}/site.webmanifest`,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <div>
//         <Providers>
//           <body className="body-font background-color">{children}</body>
//         </Providers>
//       </div>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Providers from "@/components/providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
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
      name: "Rubirizi News Bulletin",
      url: siteConfig.url,
    },
  ],
  creator: "Rubirizi News Bulletin",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["sw_KE"],
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
    creator: "@RubiriziNews",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": `${siteConfig.url}/en-US`,
      "sw-KE": `${siteConfig.url}/sw-KE`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          href={`${siteConfig.url}/sw-KE`}
          hrefLang="sw-KE"
        />
        <link
          rel="alternate"
          href={`${siteConfig.url}/en-US`}
          hrefLang="en-US"
        />
        <link rel="alternate" href={siteConfig.url} hrefLang="x-default" />
      </head>
      <body className="body-font background-color">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              name: "Rubirizi News Bulletin",
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              sameAs: [
                "https://www.facebook.com/RubiriziNewsBulletin",
                "https://twitter.com/RubiriziNews",
                "https://www.instagram.com/rubirizinews/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+256-123-456-789",
                contactType: "customer service",
                areaServed: "UG",
                availableLanguage: ["English", "Swahili"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
