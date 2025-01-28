import React, { useState } from "react";
import { homeItemDetails, homeItemImages } from "../../utils/data";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const AddToCart = () => {
  const [counter, setCounter] = useState(0);

  const pricePerItem = parseFloat(homeItemDetails?.price) || 0;

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const subtotal = counter * pricePerItem;

  return (
    <div className="w-full h-fit border border-black px-20">
      <div className="w-full h-fit border border-blue-500 py-10 flex flex-col gap-y-10">
        {/* Breadcrumb */}
        <div className="w-fit h-fit flex gap-x-3">
          <h1 className="text-xs font-normal text-gray-400">Home</h1>
          <h1 className="text-xs font-normal text-gray-400">/</h1>
          <h1 className="text-xs font-normal text-black">Cart</h1>
        </div>

        {/* Cart Details */}
        <div className="w-full h-fit border border-black flex flex-col gap-y-10">
          {/* Header */}
          <div className="w-full h-14 bg-white flex items-center justify-between px-10 shadow-lg">
            <h1 className="text-base font-normal">Product</h1>
            <h1 className="text-base font-normal">Price</h1>
            <h1 className="text-base font-normal">Quantity</h1>
            <h1 className="text-base font-normal">Subtotal</h1>
          </div>

          {/* Product Row */}
          <div className="w-full h-14 bg-white flex items-center justify-between px-12 border border-black     shadow-lg">
            <img
              className="w-10 h-10"
              src={homeItemImages?.homeItems?.[0]?.src || ""}
              alt="Product"
            />
            <h1 className="text-base font-normal">{homeItemDetails.price}</h1>
            <div className="flex items-center justify-center w-14 h-fit px-3 py-1 border border-gray-300 gap-x-2">
              <h1 className="font-normal text-sm">{counter}</h1>
              <div className="w-fit h-fit flex flex-col items-center">
                <button onClick={decrementCounter} className="outline-none">
                  <FaAngleUp className="text-xs" />
                </button>
                <button onClick={incrementCounter} className="outline-none">
                  <FaAngleDown className="text-xs" />
                </button>
              </div>
            </div>
            <h1 className="text-base font-normal">${subtotal.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
