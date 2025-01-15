import React, { useState } from "react";
import { topMessage } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

export const ExlusiveNav = ({ cartIcon }) => {
  const navigate = useNavigate();
  const [inputVal, setInputval] = useState("");

  const handelVal = () => {
    if (inputVal == ""){
alert("Input field is Empty !")
    }
    else{

      console.log("Input Value :", inputVal);
      setInputval("");
    }
  };

  return (
    <div className="w-full h-auto shadow-lg border-b-2 border-gray-300 flex flex-col">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row py-2 sm:py-3 w-full bg-black px-4 sm:px-8 md:px-14 lg:px-20 justify-center items-center">
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-start">
          <h1 className="text-xs md:text-sm text-white font-normal text-center sm:text-left">
            {topMessage.message}
          </h1>
          <h1
            className="text-xs md:text-sm text-white font-semibold cursor-pointer hover:underline text-center sm:text-left"
            onClick={() => navigate("/shopnow")} 
          >
            ShopNow
          </h1>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-14 lg:px-20 py-4 justify-between">
        <div className="w-full md:w-fit flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center md:justify-start">
          <h1 className="text-xl md:text-2xl font-semibold">Exclusive</h1>
          <ul className="flex gap-4 md:gap-6 text-xs lg:text-base items-center font-normal">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/signup")} 
            >
              Sign Up
            </li>
          </ul>
        </div>
        <div className="w-fit flex gap-x-3 items-center">
          <div className="w-full md:w-fit mt-4 md:mt-0 flex items-center bg-gray-100 px-3 py-2 rounded-md shadow-sm">
            <input
              className="bg-transparent text-xs md:text-sm w-full md:w-36 lg:w-56 outline-none placeholder-gray-500 px-2 font-normal capitalize placeholder:font-normal"
              type="text"
              placeholder="What are you looking for?"
              onChange={(e) => setInputval(e.target.value)}
              value={inputVal}
            />
            <RiSearchLine
              onClick={handelVal}
              className="w-5 h-5 cursor-pointer text-gray-600 "
            />
          </div>
          {cartIcon && <div className="text-xl cursor-pointer mt-3 md:mt-0">{cartIcon}</div>}
        </div>
      </div>
    </div>
  );
};
