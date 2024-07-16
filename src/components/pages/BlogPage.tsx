import { Articles } from "../parts/Articles";
import { Aside } from "../parts/Aside";
import { Headers } from "../parts/Headers";

export const BlogPage = () => {
  return (
    <div className="flex flex-col relative bg-slate-700">
      <Headers />
      <main className="flex w-full gap-8 mt-24">
        <Aside />
        <Articles />
      </main>
    </div>
  );
};
