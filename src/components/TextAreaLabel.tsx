import React from "react";

type TextAreaLabelPropsType = {
  value: string;
  name: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  className?: string;
};

export default function TextAreaLabel({
  name,
  value,
  onChange,
  label,
  className,
}: TextAreaLabelPropsType) {
  return (
    <div className={`flex flex-col space-y-2 items-start ${className}`}>
      <span className="font-bold text-lg">{label}</span>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full text-lg px-1 outline-none rounded-md shadow-md border-2 border-gray-200"
      />
    </div>
  );
}
