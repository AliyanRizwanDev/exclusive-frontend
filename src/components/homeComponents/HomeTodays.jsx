import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import axios from "axios";

export const HomeTodays = () => {
  const [flashSales, setFlashSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.18.134:3000/api/flashSales");
        console.log("Fetched Data:", response.data.data); 
        setFlashSales(response.data.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit flex flex-col gap-y-8">
        {/* Horizontal Scrolling Row */}
        <div className="w-full flex overflow-x-auto gap-x-6 scrollbar-hidden">
          {flashSales.length > 0 ? (
            flashSales.map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] lg:min-w-[282px] h-fit flex flex-col gap-y-4 pb-3"
              >
                {/* Product Image Section */}
                <div className="min-w-[250px] h-48 lg:h-60  cursor-pointer border-gray-300 flex justify-center items-center relative group">
                  <img
                    src={item._doc.images[0]}
                    alt={item.name || "Product Image"}
                    className="w-40 h-40 object-contain"
                  />
                  <div className="w-fit  h-fit px-2 py-1 rounded-md text-sm text-white flex justify-center items-center font-normal bg-[#DB4444] absolute top-0 left-0">
                   {(item._doc.price - item._doc.discounted_price ) / 100}%
                  </div>
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
                  <h1 className="text-sm lg:text-base font-medium">{item._doc.name}</h1>
                  <div className="w-fit h-fit flex gap-x-3">
                    <h1 className="text-sm lg:text-base font-medium">${item._doc.discounted_price}</h1>
                    <h1 className="text-sm lg:text-base font-medium line-through text-gray-500">
                      ${item._doc.price}
                    </h1>
                  </div>
                  <div className="w-fit h-fit flex gap-x-2 items-center">
                    <h1 className="text-sm font-medium">Review :</h1>
                    <h1 className="text-xs font-medium pt-[2px]">{item._doc.rating || "No reviews"}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">No flash sales available</p>
          )}
        </div>
      </div>
    </div>
  );
};
