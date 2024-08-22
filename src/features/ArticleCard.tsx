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
    <Card className="border-2 bg-dark m-10">
      <Link href={`/blog/${id}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-end gap-4">
        <Button
          onClick={() => console.log("click delete")}
          className="bg-danger text-secondary"
        >
          Delete
        </Button>
        <Button onClick={() => console.log("clicked edit")}>Edit</Button>
      </CardFooter>
    </Card>
  );
};
