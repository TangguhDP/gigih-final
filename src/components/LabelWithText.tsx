import React from "react";

type LabelWithTextPropsType = {
  label: string;
  text: string;
};

export default function LabelWithText({ label, text }: LabelWithTextPropsType) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg">{label}</span>
      <span title={text} className="text-base truncate">
        {text}
      </span>
    </div>
  );
}
