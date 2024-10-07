// import { getArticleBySlug, getSingleArticle } from "@/actions/articleActions";
// import Details from "@/components/details";

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) {
//   // Fetch the single article
//   const product = await getArticleBySlug(slug);

//   return {
//     title: product?.title,
//     description: product?.description,
//     alternates: {
//       canonical: `/detailed/${product?.slug}`,
//     },
//     openGraph: {
//       title: product?.title,
//       description: product?.description,
//       images: [product?.thumbnail],
//     },
//   };
// }
// export default async function page({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) {
//   const articleFetched = await getArticleBySlug(slug);

//   return (
//     <div>
//       <div className="lg:px-16 md:px-12 px-4">
//         <Details articleFetched={articleFetched} />
//       </div>
//     </div>
//   );
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/actions/articleActions";
import Details from "@/components/details";

interface PageProps {
  params: { slug: string };
}

interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  slug: string;
  content: any; // Represents Json type
  description?: string | null;
  readTime?: string | null;
  featuredOption: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  categoryId?: string | null;
  mediaHouseId?: string | null;
  User: UserWithoutNews | null;
  Category: CategoryWithoutNews | null;
  MediaHouse: MediaHouseWithoutNews | null;
}

interface UserWithoutNews {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  phone?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password: string;
  isVerfied: boolean;
  token?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

interface MediaHouseWithoutNews {
  id: string;
  title: string;
  image?: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryWithoutNews {
  id: string;
  title: string;
  slug: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const article: NewsProps | any = (await getArticleBySlug(slug)) || [];

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  const ogImage = article.thumbnail || "/default-og-image.jpg";

  return {
    title: `${article.title} | Rubirizi News Bulletin`,
    description:
      article.description || `Read the full article: ${article.title}`,
    alternates: {
      canonical: `https://rubirizi-news.com/detailed/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description:
        article.description || `Read the full article: ${article.title}`,
      url: `https://rubirizi-news.com/detailed/${article.slug}`,
      type: "article",
      publishedTime: article.createdAt.toISOString(),
      modifiedTime: article.updatedAt.toISOString(),
      authors: [article.User?.userName || "Rubirizi News"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description:
        article.description || `Read the full article: ${article.title}`,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params: { slug } }: PageProps) {
  const article: NewsProps | any = (await getArticleBySlug(slug)) || [];

  if (!article) {
    notFound();
  }

  return (
    <main className="lg:px-12 md:px-12 px-4">
      <article>
        <Details articleFetched={article} />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.description,
            image: article.thumbnail || "/default-og-image.jpg",
            datePublished: article.createdAt.toISOString(),
            dateModified: article.updatedAt.toISOString(),
            author: {
              "@type": "Person",
              name: article.User?.userName || "Rubirizi News",
            },
            publisher: {
              "@type": "Organization",
              name: "Rubirizi News Bulletin",
              logo: {
                "@type": "ImageObject",
                url: "https://rubirizi-news.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://rubirizi-news.com/detailed/${article.slug}`,
            },
          }),
        }}
      />
    </main>
  );
}
