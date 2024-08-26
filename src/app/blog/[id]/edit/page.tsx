import { EditForm } from "@/features/EditForm";
import { fetchAllBlogs, fetchOneArticle } from "@/lib/api";

export default async function EditArticle({
  params,
}: {
  params: { id: string };
}) {
  const article = await fetchOneArticle(params.id);

  return article && <EditForm article={article} />;
}
