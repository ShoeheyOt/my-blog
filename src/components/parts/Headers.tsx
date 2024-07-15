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
              <img src="icons/search.svg" className="w-6  mr-2" />
              <input
                placeholder="search"
                className="border-none focus:outline-none text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black rounded-md px-4"
            >
              search
            </button>
          </form>
        </div>
        <div className="flex">
          <button>new Post</button>
          <div>account</div>
        </div>
      </div>
    </header>
  );
};
