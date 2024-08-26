"use client";
import { IOneArticle } from "@/lib/type";
import { Button } from "../ui/button";
import Link from "next/link";
import { deleteArticle } from "@/lib/api";
import { useRouter } from "next/navigation";

export const OnePage = ({ article }: { article: IOneArticle }) => {
  const router = useRouter();
  const { _id, title, text, createdAt } = article;
  const handleClickDelete = async () => {
    await deleteArticle(_id);
    router.push("/blog");
    router.refresh();
  };
  return (
    <div className="oneArticleWrapper px-96 pt-24 min-h-screen bg-primary">
      <div className="text-D_title font-thin">{title}</div>
      <div className="flex gap-4 mt-4">
        <div className="self-end">{createdAt}</div>
      </div>
      <div className="my-10 text-D_text min-h-80 font-thin text-center">
        {text}
      </div>

      <div className="flex mt-4 justify-between">
        <Button asChild>
          <Link href="/blog">Back</Link>
        </Button>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`${_id}/edit`}>Edit</Link>
          </Button>
          <Button variant="destructive" onClick={handleClickDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
