import { getSingleArticle } from "@/actions/articleActions";
import Details from "@/components/details";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const articleFetched = await getSingleArticle({ id });

  return (
    <div>
      <div className="lg:px-16 md:px-12 px-4">
        <Details articleFetched={articleFetched} />
      </div>
    </div>
  );
}
