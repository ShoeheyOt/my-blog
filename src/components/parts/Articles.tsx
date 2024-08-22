import { ArticleCard } from "@/features/ArticleCard";
import { articleFakeData } from "../../../public/articleFakeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

export const Articles = () => {
  const fakeData = articleFakeData;
  return (
    <div className="wrapper ml-auto border-2 w-5/6 bg-light min-h-[calc(100vh-6rem)]">
      <article>
        {fakeData.map((data, i) => (
          <ArticleCard key={i} data={data} />
        ))}
      </article>
    </div>
  );
};
