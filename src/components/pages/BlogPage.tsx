import { Articles } from "../parts/Articles";
import { Aside } from "../parts/Aside";
import { Headers } from "../parts/Headers";

export const BlogPage = () => {
  return (
    <div className="flex flex-col relative">
      <Headers />
      <main className="flex w-full gap-8 mt-44">
        <Aside />
        <Articles />
      </main>
    </div>
  );
};
