import { getArticleBySlug, getSingleArticle } from "@/actions/articleActions";
import Details from "@/components/details";

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
