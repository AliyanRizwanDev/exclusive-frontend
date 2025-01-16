import React from "react";
import { homeItemDetails, homeItemImages } from "../../utils/data";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

export const HomeTodays = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit flex flex-col gap-y-8">
        {/* Horizontal Scrolling Row */}
        <div className="w-full flex overflow-x-auto gap-x-6 scrollbar-hidden">
          {homeItemImages.homeItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] lg:min-w-[282px] h-fit flex flex-col gap-y-4 pb-3"
            >
              {/* Product Image Section */}
              <div className="min-w-[250px] h-48 lg:h-60  bg-[#F5F5F5] cursor-pointer border-gray-300 flex justify-center items-center relative group">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-40 h-40 object-contain"
                />

                <div className="w-5 h-fit absolute top-3 right-3 flex flex-col gap-y-4">
                  <FaRegHeart className="text-xl cursor-pointer" />
                  <FaRegEye className="text-xl cursor-pointer" />
                </div>

                <div className="w-full h-11 rounded-md absolute bottom-0 bg-black flex justify-center items-center opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-base font-medium">
                    Add To Cart
                  </p>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="w-full h-fit flex flex-col gap-y-1">
                <h1 className="text-sm lg:text-base font-medium">
                  {homeItemDetails.title}
                </h1>
                <div className="w-fit h-fit flex gap-x-3">
                  <h1 className="text-sm lg:text-base font-medium">
                    {homeItemDetails.price}
                  </h1>
                  <h1 className="text-sm lg:text-base font-medium line-through text-gray-500">
                    {homeItemDetails.priviousPrice}
                  </h1>
                </div>
                <div className="w-fit h-fit flex gap-x-2 items-center">
                  <h1 className="text-sm font-medium">Review :</h1>
                  <h1 className="text-xs font-medium pt-[2px]">
                    {homeItemDetails.rating}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
