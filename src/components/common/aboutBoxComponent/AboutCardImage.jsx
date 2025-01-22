import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const AboutCardImage = ({title,discription,imgsrc}) => {
  return (
    <div className="w-[380px] h-fit flex flex-col gap-y-5 ">
      <div className="w-full h-fit bg-[#F5F5F5] flex justify-center items-center pt-10">
        <img
          src={imgsrc}
          className="w-60 h-[340px]"
        />
      </div>
      <div className="w-fit h-fit flex flex-col gap-y-2">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-base font-normal">{discription}</p>
      </div>
      <div className="w-fit h-fit flex items-center text-lg  gap-x-3">
      <CiTwitter className="cursor-pointer"/>
      <FaInstagram className="cursor-pointer"/>
      <FaLinkedinIn className="cursor-pointer"/>


      </div>
    </div>
  );
};
