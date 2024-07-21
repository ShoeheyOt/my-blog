import { Calender } from "@/features/Calender";

export const Aside = () => {
  return (
    <aside className="font-montserrat text-primary text-D_text font-extralight fixed border-2 w-1/6 h-[calc(100%-6rem)]">
      <div className="h-2/5 border-2">filter by tag</div>
      <Calender />
      <div className="h-1/5 border-2">link to documentation</div>
    </aside>
  );
};
