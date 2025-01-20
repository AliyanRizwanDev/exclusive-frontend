import React, { useState } from "react";
import { homeItemDetails, homeItemImages, ProductDiscount } from "../../utils/data";
import { FaRegEye, FaRegHeart, FaShippingFast } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [counter, setCounter] = useState(0);
  

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit px-4 md:px-10 lg:px-20">
      <div className="w-full h-fit flex flex-col gap-y-5">
        <div className="w-fit h-fit pt-5 flex gap-x-3 items-center">
          <h1 className="text-sm font-medium text-gray-500">Products</h1>
          <h1 className="text-sm font-medium text-gray-500">/</h1>
          <h1 className="text-sm font-medium text-gray-500">Gaming</h1>
          <h1 className="text-sm font-medium text-black">{homeItemDetails.title}</h1>
        </div>

        <div className="w-full h-fit flex flex-col lg:flex-row justify-center gap-8">
          <div className="w-full lg:w-1/2 bg-gray-100 flex justify-center items-center">
            <img
              className="w-48 sm:w-72 object-contain"
              src="./assets/home-images/Homeitem.svg"
              alt="Product"
            />
          </div>
          <div className="flex-1 h-fit py-5 flex flex-col gap-y-3 px-4 sm:px-10 lg:px-20">
            <h1 className="text-lg sm:text-2xl">{homeItemDetails.title}</h1>
            <div className="w-fit h-fit flex gap-x-2 items-center">
              <h1 className="text-sm sm:text-base font-normal">Reviews :</h1>
              <h1 className="text-sm font-normal pt-1">{homeItemDetails.rating}</h1>
            </div>
            <h1 className="text-lg sm:text-2xl font-normal">{homeItemDetails.price}</h1>
            <h1 className="text-sm font-normal w-full sm:w-[340px]">{homeItemDetails.detail}</h1>
            <div className="w-full h-[2px] bg-black mt-4"></div>

            <div className="w-full h-fit flex flex-wrap gap-x-4">
              {["Red", "Yellow", "Blue", "Black"].map((color) => (
                <div key={color} className="w-fit h-fit flex gap-x-2 items-center">
                  <input type="radio" name="color" id={color.toLowerCase()} className="cursor-pointer" />
                  <label htmlFor={color.toLowerCase()} className="text-sm font-normal">
                    {color}
                  </label>
                </div>
              ))}
            </div>

            <div className="w-fit h-fit flex items-center gap-x-4 mt-2">
              <h1 className="text-base sm:text-xl font-normal">Size :</h1>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`w-7 h-7 rounded-md flex items-center justify-center cursor-pointer  
                  ${
                    selectedSize === size
                      ? "bg-red-500 text-white"
                      : "border border-gray-400 text-black"
                  }`}
                >
                  <h1 className="text-xs font-medium">{size}</h1>
                </div>
              ))}
            </div>

            <div className="w-full h-fit flex gap-x-6 justify-between sm:pr-16 mt-2">
              <div className="w-fit h-fit flex items-center">
                <div   onClick={() => setCounter((temp) => (temp > 0 ? temp - 1 : 0))}  className="w-8 h-8 flex justify-center font-normal rounded-sm text-xl cursor-pointer items-center border border-gray-400 transition-all duration-300 hover:bg-[#DB4444] hover:border-0  hover:text-white">
                  -
                </div>
                <div className="w-8 h-8 flex justify-center px-8 rounded-sm text-base font-normal items-center border border-gray-400">
                  {counter}
                </div>
                <div onClick={()=> setCounter(counter + 1)}  className="w-8 h-8 flex justify-center font-normal rounded-sm text-xl cursor-pointer items-center border border-gray-400  transition-all duration-300  hover:bg-[#DB4444] hover:text-white hover:border-0">
                  +
                </div>
              </div>
              <button className="w-fit h-fit bg-red-500 text-white font-normal rounded-md text-xs xl:text-base px-9 transition-all duration-300 py-2 hover:bg-red-400">
                Buy Now
              </button>
            </div>

            <div className="w-full h-fit flex flex-col  mt-6">
              <div className="w-full flex items-center py-2 gap-x-4 pl-3 border border-gray-400">
                <FaShippingFast className="text-xl sm:text-2xl" />
                <div className="flex flex-col">
                  <h1 className="text-sm sm:text-base font-medium">Free Delivery</h1>
                  <h1 className="text-[12px] font-medium">Enter your postal code for Delivery Availability</h1>
                </div>
              </div>
              <div className="w-full flex items-center py-2 gap-x-4 pl-3 border border-gray-400">
                <FaArrowRotateLeft className="text-xl sm:text-2xl" />
                <div className="flex flex-col">
                  <h1 className="text-sm sm:text-base font-medium">Return Delivery</h1>
                  <h1 className="text-[12px] font-medium">Free 30 Days Delivery Returns. Details</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-fit mt-36">
          <div className="w-full h-fit flex items-center gap-x-4">
            <div className="w-6 h-11 bg-red-500"></div>
            <h1 className="text-sm sm:text-base font-semibold text-red-500">Related Item</h1>
          </div>
        </div>

        <div className="w-full py-6 flex overflow-x-auto gap-x-10 scrollbar-hidden pb-20">
          <div className="w-full h-fit flex flex-col gap-y-8">
            <div   onClick={() => navigate("/products")}  className="flex gap-x-9 cursor-pointer">
              {homeItemImages.homeItems.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[200px] lg:min-w-[282px] h-fit flex flex-col gap-y-4 pb-3"
                >
                  <div className="min-w-[200px] lg:min-w-[250px] h-48 lg:h-60 border bg-gray-100 flex justify-center items-center relative group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-40 h-40 object-contain"
                    />
                    <div className="w-10 h-6 bg-red-500 absolute top-4 left-4 rounded-sm flex justify-center items-center">
                      <h1 className="text-white text-xs font-normal">{ProductDiscount.discount}</h1>
                    </div>
                    <div className="w-5 absolute top-3 right-3 flex flex-col gap-y-4">
                      <FaRegHeart className="text-lg sm:text-xl cursor-pointer" />
                      <FaRegEye className="text-lg sm:text-xl cursor-pointer" />
                    </div>
                    <div className="w-full h-11 rounded-md absolute bottom-0 bg-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-base font-medium">Add To Cart</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[282px] h-fit flex flex-col gap-y-1">
                    <h1 className="text-sm lg:text-base font-medium">{homeItemDetails.title}</h1>
                    <div className="w-fit flex gap-x-3">
                      <h1 className="text-sm lg:text-base font-medium">{homeItemDetails.price}</h1>
                      <h1 className="text-sm lg:text-base font-medium line-through text-gray-500">
                        {homeItemDetails.previousPrice}
                      </h1>
                    </div>
                    <div className="w-fit flex gap-x-2 items-center">
                      <h1 className="text-sm font-medium">Review :</h1>
                      <h1 className="text-xs font-medium">{homeItemDetails.rating}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
