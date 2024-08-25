import { OnePage } from "@/components/pages/OnePage";
import { fetchAllBlogs, fetchOneArticle } from "@/lib/api";

export default async function BlogOnePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const article = await fetchOneArticle(id);
  return article && <OnePage article={article} />;
}
