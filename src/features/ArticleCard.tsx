"use client";
import Link from "next/link";
import { IArticleFake } from "../../public/articleFakeData";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IOneArticle } from "@/lib/type";
import { useRouter } from "next/navigation";

export const ArticleCard = ({ data }: { data: IOneArticle }) => {
  const router = useRouter();
  const { _id, title, createdAt } = data;

  const handleEditClick = () => {
    router.push(`blog/${_id}/edit`);
  };

  return (
    <Card className="border-2 bg-primary  m-10">
      <Link href={`/blog/${_id}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="destructive">Delete</Button>
        <Button variant="default" onClick={handleEditClick}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};
