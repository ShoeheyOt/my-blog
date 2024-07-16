export const Button = ({
  children,
  buttonType,
}: {
  children: React.ReactNode;
  buttonType?: "submit" | "reset" | "button";
}) => {
  return (
    <button
      type={buttonType}
      className="bg-white border rounded-md text-black w-24 h-12"
    >
      {children}
    </button>
  );
};
