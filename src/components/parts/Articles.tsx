import { ArticleCard } from "@/features/ArticleCard";
import { articleFakeData } from "../../../public/articleFakeData";
import { fetchAllBlogs } from "@/lib/api";

export const Articles = async () => {
  const articles = await fetchAllBlogs();
  console.log(articles);
  const fakeData = articleFakeData;
  return (
    <div className="wrapper ml-auto border-2 w-5/6 bg-secondary min-h-[calc(100vh-6rem)]">
      <article>
        {fakeData.map((data, i) => (
          <ArticleCard key={i} data={data} />
        ))}
      </article>
    </div>
  );
};
