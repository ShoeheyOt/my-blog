"use client";
import { Button } from "@/features/Button";
import { useRouter } from "next/navigation";

export const Headers = () => {
  const router = useRouter();
  const handleSearchClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(e);
  };
  const handleAddClick = () => {
    router.push("/blog/add");
  };
  return (
    <header className="fixed border-2 h-24 w-full bg-secondary text-primary">
      <div className="wrapper h-full flex justify-between items-center mx-4">
        <a href="/blog">
          <h1 className="text-D_logo font-light">THE BLOG</h1>
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
            <Button onClick={handleSearchClick}>search</Button>
          </form>
        </div>
        <div className="flex gap-8">
          <Button
            onClick={handleAddClick}
            className="bg-warning opacity-90 font-semibold hover:opacity-100 rounded-lg text-center"
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
