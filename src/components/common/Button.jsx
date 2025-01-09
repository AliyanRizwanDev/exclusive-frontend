import React from "react";

export const Button = ({ label, handleInputVal }) => {
  return (
    <button
      onClick={handleInputVal}
      className="w-full h-11 rounded-sm text-white font-medium text-sm transition-all duration-300 ease-in-out bg-[#DB4444] hover:bg-red-400"
    >
      {label}
    </button>
  );
};
