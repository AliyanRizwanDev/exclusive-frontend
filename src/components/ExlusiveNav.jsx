import React, { useState } from "react";
import { topMessage } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

export const ExlusiveNav = () => {
  const navigate = useNavigate();
  const [inputVal,setInputval] = useState("")

  const handelVal = ()=>{
  console.log("Input Value :",inputVal);
setInputval("")
  }

  return (
    <div className="w-full h-auto shadow-lg border-b-2 border-gray-300 flex flex-col">
      <div className="flex flex-col sm:flex-row py-3 w-full bg-black px-4 sm:px-14 justify-center items-center">
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-start">
          <h1 className="text-xs md:text-sm text-white font-normal text-center sm:text-left">
            {topMessage.message}
          </h1>
          <h1
            className="text-xs md:text-sm text-white font-semibold cursor-pointer hover:underline text-center sm:text-left"
            onClick={() => navigate("/home")}
          >
            ShopNow
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center px-4 sm:px-14 py-4 justify-between">
        <div className="w-full md:w-fit flex flex-col  md:flex-row items-center gap-6 md:gap-14 justify-center md:justify-start">
          <h1 className="text-xl md:text-2xl font-semibold">Exclusive</h1>
          <ul className="flex gap-4 md:gap-8 text-xs lg:text-base items-center font-normal">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Sign Up</li>
          </ul>
        </div>

        <div className="w-full md:w-fit mt-4 md:mt-0 flex items-center bg-gray-100 px-3 py-2 rounded-md shadow-sm">
          <input
            className="bg-transparent text-xs md:text-sm w-full md:w-36 lg:w-56 outline-none placeholder-gray-500 px-2 font-normal capitalize placeholder:font-normal"
            type="text"
            placeholder="What are you looking for?"
            onChange={(e)=>setInputval(e.target.value)}
            value={inputVal}
          />
          <RiSearchLine onClick={handelVal} className="w-5 h-5 cursor-pointer text-gray-600" />
        </div>
      </div>
    </div>
  );
};
