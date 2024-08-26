"use client";

import { useRef } from "react";

export const LoginPage = () => {
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputEMailRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputNameRef.current
      ? inputNameRef.current.value
      : "name is Empty";
    const eMail = inputEMailRef.current
      ? inputEMailRef.current.value
      : "email is Empty";
    const password = inputPasswordRef.current
      ? inputPasswordRef.current.value
      : "pass is empty";
    console.log(e);

    inputNameRef.current!.value = "";
    inputEMailRef.current!.value = "";
    inputPasswordRef.current!.value = "";
  };
  return (
    <div className="w-full h-screen">
      <div
        id="wrapper"
        className="w-full h-full flex justify-center items-center"
      >
        <section className="border-2 pb-10 rounded-md">
          <h4 className="w-full text-center bg-stone-600 text-lg">
            Login Page
          </h4>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col gap-4 px-10 mt-4"
          >
            <input
              type="text"
              name="account"
              placeholder="Name"
              ref={inputNameRef}
              className="bg-stone-300 text-black"
            />

            <input
              type="text"
              name="eMail"
              placeholder="eMail"
              ref={inputEMailRef}
              className="bg-stone-300 text-black"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              ref={inputPasswordRef}
              className="bg-stone-300 text-black"
            />

            <button type="submit" className="bg-stone-600 hover:opacity-80">
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
