"use client";
import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

export const Calender = () => {
  const [selected, setSelected] = useState<Date | undefined>();
  const defaultClass = getDefaultClassNames();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={{
        root: "h-2/5 w-full",
        today: "bg-info rounded-lg text-secondary",
        selected: "bg-primary rounded-lg text-secondary",
        day: `${defaultClass.day} p-3 text-center font-D_notes`,
        months: "relative text-D_notes",
        nav: "absolute top-0 right-0",
        chevron: "fill-primary",
      }}
    />
  );
};
