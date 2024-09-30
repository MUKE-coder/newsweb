import { getArticleBySlug, getSingleArticle } from "@/actions/articleActions";
import Details from "@/components/details";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Fetch the single article
  const product = await getArticleBySlug(slug);

  return {
    title: product?.title,
    description: product?.description,
    alternates: {
      canonical: `/detailed/${product?.slug}`,
    },
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [product?.thumbnail],
    },
  };
}
export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const articleFetched = await getArticleBySlug(slug);

  return (
    <div>
      <div className="lg:px-16 md:px-12 px-4">
        <Details articleFetched={articleFetched} />
      </div>
    </div>
  );
}
