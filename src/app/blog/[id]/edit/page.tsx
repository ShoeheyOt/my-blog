import { EditForm } from "@/features/EditForm";
import { fetchAllBlogs } from "@/lib/api";

export default async function EditArticle({
  params,
}: {
  params: { id: number };
}) {
  const allBlogs = await fetchAllBlogs();
  const article = allBlogs?.filter(
    (data) => data._id == params.id.toString()
  )[0];

  return article && <EditForm article={article} />;
}
