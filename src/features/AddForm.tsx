"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { Button } from "./Button";

export const AddForm = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const title = titleRef.current;
    const text = textRef.current;
    if (title != null && text != null) {
      console.log({ title: title.value, text: text.value });
    }
    router.push("/blog/add");
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (titleRef.current != null) titleRef.current.value = "";
    if (textRef.current != null) textRef.current.value = "";
  };
  const handleBack = () => {
    router.push("/blog");
  };

  return (
    <div className="h-full mx-96">
      <header className="postBlogWrapper border-2 rounded-lg flex justify-between items-center my-8 px-12 bg-secondary text-primary">
        <div className="text-center my-8 text-D_title font-montserrat font-extralight">
          New Post
        </div>
        <Button onClick={handleBack} className="bg-danger">
          Back
        </Button>
      </header>
      <form
        onSubmit={handleSubmit}
        className="w-full border-2 mx-auto my-auto flex justify-center rounded-lg bg-secondary"
      >
        <div className="addPostWrapper flex flex-col font-montserrat gap-2 w-full px-12 py-8 h-[calc(100dvh/1.5)]">
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
  );
};
