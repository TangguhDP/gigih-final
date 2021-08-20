import React from "react";

type TextInputLabelPropsType = {
  value: string;
  name: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  placeholder?: string;
  required?: boolean;
};

export default function TextInputLabel({
  name,
  value,
  onChange,
  label,
  className,
  placeholder,
  required = false,
}: TextInputLabelPropsType) {
  return (
    <div className={`flex flex-col space-y-2 items-start ${className}`}>
      <span className="font-bold text-lg">{label}</span>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        className="w-full text-lg px-1 outline-none rounded-md shadow-md h-12 border-2 border-gray-200"
      />
    </div>
  );
}
