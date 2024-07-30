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

  return (
    <div className="h-full mx-96">
      <div className="text-center my-8 border-2 text-D_title font-montserrat font-thin">
        New Post
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full border-2 mx-auto my-auto flex justify-center "
      >
        <div className="addPostWrapper flex flex-col font-montserrat gap-2 w-full px-12 h-[calc(100dvh/1.5)]">
          <label>
            Title:
            <input
              ref={titleRef}
              name="title"
              className="border-2 rounded-lg w-full"
            />
          </label>
          <label className="w-full h-full">
            Text:
            <textarea
              ref={textRef}
              name="text"
              className="border-2 rounded-lg w-full h-[calc(100%-3rem)]"
            />
          </label>
          <div className="submitWrapper flex justify-between">
            <Button onClick={(e) => handleCancel(e)} className="border-2">
              cancel
            </Button>
            <Button buttonType="submit" className="border-2">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
