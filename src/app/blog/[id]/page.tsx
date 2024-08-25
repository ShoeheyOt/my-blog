import { OnePage } from "@/components/pages/OnePage";
import { fetchAllBlogs } from "@/lib/api";

export default async function BlogOnePage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const articles = await fetchAllBlogs();
  const oneArticle =
    articles && articles.filter((data) => data["_id"] == id.toString())[0];
  return oneArticle && <OnePage article={oneArticle} />;
}
