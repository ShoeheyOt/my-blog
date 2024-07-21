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
        today: "bg-info rounded-lg",
        selected: "bg-primary rounded-lg text-secondary",
        day: `${defaultClass.day} p-5 text-center`,
        months: "relative",
        nav: "absolute top-0 right-0",
        chevron: "fill-primary",
      }}
    />
  );
};
