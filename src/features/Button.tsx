"use client";
import { cn } from "@/lib/utils";

export const Button = ({
  className,
  children,
  buttonType,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  buttonType?: "submit" | "reset" | "button";
  onClick?: () => void;
}) => {
  const type = buttonType ? buttonType : "button";
  return (
    <button
      onClick={() => console.log(type)}
      type={type}
      className={cn(
        "bg-primary text-secondary font-montserrat font-medium rounded-md w-24 h-12",
        className
      )}
    >
      {children}
    </button>
  );
};
