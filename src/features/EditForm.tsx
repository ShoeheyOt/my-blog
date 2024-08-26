"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";
import { Button } from "./Button";
import { IOneArticle } from "@/lib/type";
import { updateOneArticle } from "@/lib/api";

export const EditForm = ({ article }: { article: IOneArticle }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (titleRef.current) titleRef.current.value = article.title;
    if (textRef.current) textRef.current.value = article.text;
  }, [titleRef, textRef]);

  const handleBack = () => {
    router.back();
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const id = article._id;
    let title = "";
    let text = "";
    if (titleRef.current) {
      title = titleRef.current.value;
    }
    if (textRef.current) {
      text = textRef.current.value;
    }
    await updateOneArticle(id, title, text);

    router.push("/blog");
    router.refresh();
  };
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen bg-light py-8">
      <div className="h-full mx-96">
        <header className="postBlogWrapper border-2 rounded-lg flex justify-between items-center px-12 bg-secondary text-primary">
          <div className="text-center my-8 text-D_title  font-extralight">
            New Post
          </div>
          <Button onClick={handleBack} className="bg-danger">
            Back
          </Button>
        </header>
        <form
          onSubmit={handleUpdate}
          className="w-full border-2 mx-auto my-auto flex justify-center rounded-lg bg-secondary"
        >
          <div className="addPostWrapper flex flex-col gap-2 w-full px-12 py-8 h-[calc(100dvh/1.5)]">
            <label className="text-primary text-D_text font-extralight">
              Title:
              <input
                ref={titleRef}
                name="title"
                className="border-2 rounded-lg w-full pl-2 py-1 font-extralight text-D_notes bg-primary text-secondary focus:outline-none"
              />
            </label>
            <label className="w-full h-full font-extralight text-primary text-D_text">
              Text:
              <textarea
                ref={textRef}
                name="text"
                className="border-2 rounded-lg w-full h-[calc(100%-3rem)] pl-2 pt-1 font-extralight text-D_notes bg-primary focus:outline-none text-secondary"
              />
            </label>
            <div className="submitWrapper flex justify-between">
              <Button onClick={(e) => handleCancel(e)}>cancel</Button>
              <Button buttonType="submit" className="bg-info">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
