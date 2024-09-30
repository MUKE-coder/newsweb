//app/sitemap.js
import { fetchArticles } from "@/actions/articleActions";
import { getAllCats } from "@/actions/catActions";
import { getMedia } from "@/actions/mediaActions";
import { siteConfig } from "@/config/site";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  const articles = (await fetchArticles()) || [];
  const categories = (await getAllCats()) || [];
  const mediahouses = (await getMedia()) || [];
  const articleUrls = articles.map((article) => {
    return {
      url: `${baseUrl}/all-articles/${article.slug}`,
      lastModified: new Date(),
    };
  });
  const categoryUrls = categories.map((category) => {
    return {
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(),
    };
  });
  const mediahouseUrls = mediahouses.map((mediahouse) => {
    return {
      url: `${baseUrl}/categories/${mediahouse.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
    },
    ...articleUrls,
    ...categoryUrls,
    ...mediahouseUrls,
  ];
}
