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
  const { title, text, tags, createdAt, imageUrl, author } = articleFakeOneData;
  return (
    <div className="oneArticleWrapper px-96 min-h-screen bg-primary">
      <div className="text-D_title font-thin">{title}</div>
      <div className="text-end">{author.authorName}</div>
      <div className="my-10 text-D_text min-h-80 font-thin text-center">
        {text}
      </div>

      <div className="tagsWrapper">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-D_notes border-2 border-secondary px-2 rounded-full mr-1"
          >
            # {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="self-end">{createdAt}</div>
        <Button asChild className="self-end">
          <Link href="/blog">Back</Link>
        </Button>
      </div>
    </div>
  );
};
