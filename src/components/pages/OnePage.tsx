import { IArticleFakeOneData } from "@/lib/type";
import { Button } from "../ui/button";
import Link from "next/link";

export const OnePage = ({
  articleId,
  articleFakeOneData,
}: {
  articleId: number;
  articleFakeOneData: IArticleFakeOneData;
}) => {
  const { title, text, tags, createdAt, author } = articleFakeOneData;
  return (
    <div className="oneArticleWrapper px-96 min-h-screen bg-primary">
      <div className="text-D_title font-thin">{title}</div>
      <div className="flex gap-4">
        <div className="text-end">{author.authorName} | </div>
        <div className="self-end">{createdAt}</div>
      </div>
      <div className="my-10 text-D_text min-h-80 font-thin text-center">
        {text}
      </div>

      <div className="flex mt-4 justify-between">
        <Button asChild className="">
          <Link href="/blog">Back</Link>
        </Button>
        <div className="flex gap-2">
          <Button>Edit</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
    </div>
  );
};
