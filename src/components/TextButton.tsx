import React from "react";

type TextButtonPropsType = {
  value?: string;
  name?: string;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function TextButton({
  value,
  name,
  className,
  onClick,
  children,
  type = "button",
}: TextButtonPropsType) {
  return (
    <button
      type={type}
      name={name}
      aria-label={`${name}-button`}
      className={`transition duration-500 ease-in-out text-white px-6 py-2 border-2 rounded-md shadow-md tracking-wider ${className}`}
      onClick={onClick}
    >
      {value || children}
    </button>
  );
}
