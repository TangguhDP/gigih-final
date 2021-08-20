import React from "react";
import TextButton from "./TextButton";

type InputSearchPropsType = {
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function InputSearch({
  value,
  name,
  onChange,
  onClick,
  className,
  placeholder,
}: InputSearchPropsType) {
  return (
    <div className={`w-full flex flex-row justify-between ${className}`}>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-3/4 text-lg px-1 outline-none rounded-md shadow-md"
      />
      <TextButton
        name={`${name}-button`}
        value="SEARCH"
        onClick={onClick}
        className="bg-green-600 border-green-600 font-bold hover:border-white hover:bg-green-700"
      />
    </div>
  );
}
