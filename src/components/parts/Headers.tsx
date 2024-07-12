export const Headers = () => {
  return (
    <header className="fixed border-2 h-24 w-full">
      <div className="wrapper flex justify-between">
        <a href="/blog">
          <div>TITLE</div>
        </a>
        <div>
          <form>
            <input placeholder="search" />
            <button>search</button>
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
