import React from "react";

export const InputField = ({ label, value, onChange }) => {
  return (
    <div className="w-full h-fit">
      <input
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-gray-400 pb-1 outline-none pl-1 text-gray-400 font-normal capitalize text-xs placeholder:text-gray-400"
        type="text"
        value={value}
        placeholder={label}
      />
    </div>
  );
};
