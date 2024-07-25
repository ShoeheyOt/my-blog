import { ArticleCard } from "@/features/ArticleCard";
import { articleFakeData } from "../../../public/articleFakeData";

export const Articles = () => {
  const fakeData = articleFakeData;
  return (
    <div className="wrapper ml-auto border-2 w-5/6 bg-primary min-h-[calc(100vh-6rem)]">
      <article className="flex flex-wrap h-full">
        {fakeData.map((data, i) => (
          <ArticleCard key={i} data={data} />
        ))}
      </article>
    </div>
  );
};
