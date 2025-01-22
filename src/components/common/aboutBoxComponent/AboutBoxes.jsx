import React from "react";
import { AiTwotoneShop } from "react-icons/ai";

export const AboutBoxes = ({ label, label2 ,icon}) => {
  return (
    <div className="w-[280px] h-56 border border-gray-300 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-y-3 hover:bg-[#DB4444] hover:text-white">
      <div className="w-20 h-20 rounded-full bg-gray-400 flex justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">{icon}</div>
      </div>
      <h1 className="text-3xl font-bold">{label}</h1>
      <h1 className="text-base font-normal">{label2}</h1>
    </div>
  );
};
