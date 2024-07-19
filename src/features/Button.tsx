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
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const type = buttonType ? buttonType : "button";
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      type={type}
      className={cn(
        "bg-primary text-secondary font-montserrat font-medium rounded-md w-24 h-12",
        className,
      )}
    >
      {children}
    </button>
  );
};
