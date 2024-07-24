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
        month_caption: "mb-3",
        caption_label: "text-D_text",
        today: "bg-info rounded-lg text-secondary",
        selected: "bg-primary rounded-lg text-secondary",
        day: `${defaultClass.day} p-3 text-center text-D_notes`,
        months: "relative text-D_notes w-full",
        nav: "absolute top-0 right-0",
        chevron: "fill-primary",
      }}
    />
  );
};
