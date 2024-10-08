import { Calender } from "@/features/Calender";

export const Aside = () => {
  return (
    <aside className="text-primary text-D_text font-extralight fixed bg-secondary border-2 w-1/6 h-[calc(100%-6rem)]">
      <Calender />
      <div className="h-2/5 border-2">filter by tag</div>
      <div className="h-1/5 border-2">link to documentation</div>
    </aside>
  );
};
