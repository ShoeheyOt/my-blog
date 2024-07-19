"use client";
import { Button } from "@/features/Button";

export const Headers = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <header className="fixed border-2 h-24 w-full bg-secondary text-primary">
      <div className="wrapper h-full flex justify-between items-center mx-4">
        <a href="/blog">
          <h1 className="font-montserrat text-D_logo font-light">THE BLOG</h1>
        </a>
        <div>
          <form className="flex gap-4">
            <div className="bg-primary flex rounded-md p-2">
              <img src="icons/search.svg" className="w-6 mr-2" />
              <input
                placeholder="keyword"
                className="bg-primary border-none focus:outline-none text-secondary placeholder:text-secondary placeholder:opacity-50"
              />
            </div>
            <Button onClick={handleClick}>search</Button>
          </form>
        </div>
        <div className="flex gap-8">
          <Button
            onClick={(e) => handleClick(e)}
            className="bg-warning opacity-90 font-semibold hover:opacity-100"
          >
            new Post
          </Button>
          <img
            src="icons/person.png"
            className="w-12 h-12 bg-primary rounded-full"
          />
        </div>
      </div>
    </header>
  );
};
