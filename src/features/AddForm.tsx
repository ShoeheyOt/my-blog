"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

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
    router.push("/");
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (titleRef.current != null) titleRef.current.value = "";
    if (textRef.current != null) textRef.current.value = "";
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full h-screen border-2 mx-auto my-auto flex justify-center items-center"
      >
        <div className="addPostWrapper flex flex-col">
          <label>
            Title:
            <input ref={titleRef} className="border-2" />
          </label>
          <label className="w-full">
            Text:
            <textarea ref={textRef} className="border-2" />
          </label>
          <div className="submitWrapper flex justify-between">
            <button
              type="button"
              onClick={(e) => handleCancel(e)}
              className="border-2"
            >
              cancel
            </button>
            <button type="submit" className="border-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
