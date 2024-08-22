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

export const ArticleCard = ({ data }: { data: IArticleFake }) => {
  const { id, title, tags, imageUrl, author, createdAt } = data;

  return (
    <Card className="border-2 bg-primary  m-10">
      <Link href={`/blog/${id}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="destructive">Delete</Button>
        <Button variant="default">Edit</Button>
      </CardFooter>
    </Card>
  );
};
