// ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegHeart, FaShippingFast } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

export const ProductDetailPage = () => {
  const { productID } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [counter, setCounter] = useState(0);
  const [productData, setProductData] = useState(null); 

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://192.168.18.134:3000/api/product/${productID}`);
        setProductData(response.data.data); 
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductData();
  }, [productID]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="w-full h-fit px-4 md:px-10 lg:px-20 pb-16
    ">
      {productData ? (
        <div className="w-full h-fit flex flex-col gap-y-5">
          <div className="w-fit h-fit pt-5 flex gap-x-3 items-center">
            <h1 onClick={navigateToProducts} className="text-sm cursor-pointer font-medium text-gray-500">Products</h1>
            <h1 className="text-sm font-medium text-gray-500">/</h1>
            <h1 className="text-sm font-medium cursor-pointer text-gray-500">Gaming</h1>
            <h1 className="text-sm font-medium text-gray-500">/</h1>
            <h1 className="text-sm font-medium text-black">{productData.name}</h1> {/* Dynamically displaying the product name */}
          </div>

          <div className="w-full h-fit flex flex-col lg:flex-row justify-center gap-8">
            <div className="w-full lg:w-1/2  flex justify-center items-center">
              <img
                className="w-48 sm:w-72 object-contain"
                src={productData.images[0]} 
                alt={productData.name}
              />
            </div>

            <div className="flex-1 h-fit py-5 flex flex-col gap-y-3 px-4 sm:px-10 lg:px-20">
              <h1 className="text-lg sm:text-2xl">{productData.name}</h1>
              <div className="w-fit h-fit flex gap-x-2 items-center">
                <h1 className="text-sm sm:text-base font-normal">Reviews :</h1>
                <h1 className="text-sm font-normal pt-1">{productData.rating}</h1> {/* Dynamic rating */}
              </div>
              <h1 className="text-lg sm:text-2xl font-normal">${productData.discounted_price}</h1>
              <h1 className="text-sm font-normal w-full sm:w-[340px]">{productData.detail}</h1> {/* Dynamic details */}
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
                  <div onClick={() => setCounter((temp) => (temp > 0 ? temp - 1 : 0))} className="w-8 h-8 flex justify-center font-normal rounded-sm text-xl cursor-pointer items-center border border-gray-400 transition-all duration-300 hover:bg-[#DB4444] hover:border-0 hover:text-white">
                    -
                  </div>
                  <div className="w-8 h-8 flex justify-center px-8 rounded-sm text-base font-normal items-center border border-gray-400">
                    {counter}
                  </div>
                  <div onClick={() => setCounter(counter + 1)} className="w-8 h-8 flex justify-center font-normal rounded-sm text-xl cursor-pointer items-center border border-gray-400  transition-all duration-300  hover:bg-[#DB4444] hover:text-white hover:border-0">
                    +
                  </div>
                </div>
                <button className="w-fit h-fit bg-red-500 text-white font-normal rounded-md text-xs xl:text-base px-9 transition-all duration-300 py-2 hover:bg-red-400">
                  Buy Now
                </button>
              </div>

              <div className="w-full h-fit flex flex-col mt-6">
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
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
