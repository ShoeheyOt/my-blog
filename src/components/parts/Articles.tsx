import { ArticleCard } from "@/features/ArticleCard";
import { articleFakeData } from "../../../public/articleFakeData";
import {
  Card,
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
      <article className="flex flex-wrap h-full">
        {fakeData.map((data, i) => (
          <ArticleCard key={i} data={data} />
        ))}
      </article>
      <Link href="blog/add">
        <Card className="border-2 bg-dark m-10">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>this is description</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Button className="bg-danger text-secondary">Delete</Button>
            <Button>Edit</Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};
