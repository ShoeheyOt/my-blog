import { Button } from "@/features/Button";

export const Headers = () => {
  return (
    <header className="fixed border-2 h-24 w-full">
      <div className="wrapper h-full flex justify-between items-center mx-4">
        <a href="/blog">
          <div>TITLE</div>
        </a>
        <div>
          <form className="flex gap-4">
            <div className="bg-white flex border rounded-md p-2">
              <img src="icons/search.svg" className="w-6 mr-2" />
              <input
                placeholder="search"
                className="border-none focus:outline-none text-black"
              />
            </div>

            <Button buttonType="submit">search</Button>
          </form>
        </div>
        <div className="flex gap-8">
          <Button>new Post</Button>
          <img
            src="icons/person.png"
            className="w-12 h-12 bg-white rounded-full"
          />
        </div>
      </div>
    </header>
  );
};
