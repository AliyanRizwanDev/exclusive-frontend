import React, { useEffect, useState } from "react";
import { homeItemDetails, homeItemImages } from "../../utils/data";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import Select from "react-select"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Products = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortedItems, setSortedItems] = useState(homeItemImages.homeItems);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.18.134:3000/api/product");
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };

    fetchData();
  }, []);

  const navigateToLoginUp = () => {
    navigate("/productDetailPage"); 
  };

  const options = [
    { value: 'Sort By A To Z', label: 'Sort By A To Z' },
    { value: 'Sort By Z To A', label: 'Sort By Z To A' },
    { value: 'Higher Price', label: 'Higher Price' },
    { value: 'Lower Price', label: 'Lower Price' },
    { value: 'Best Review', label: 'Best Review' },
  ];

  const handleChange = (selected) => {
    setSelectedOption(selected);
    sortItems(selected.value);
  };

  const sortItems = (criteria) => {
    let sortedArray = [...homeItemImages.homeItems];
    
    switch (criteria) {
      case 'Sort By A To Z':
        sortedArray.sort((a, b) => a.title.localeCompare(b.title)); 
        break;
      case 'Sort By Z To A':
        sortedArray.sort((a, b) => b.title.localeCompare(a.title)); 
        break;
      case 'Higher Price':
        sortedArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); 
        break;
      case 'Lower Price':
        sortedArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); 
        break;
      case 'Best Review':
        sortedArray.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)); 
        break;
      default:
        break;
    }
    
    setSortedItems(sortedArray);
  };

  return (
    <div className="w-full h-fit flex flex-col gap-y-4 px-20">
      <div className="w-full h-fit flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-y-4 sm:gap-y-0 pt-5">
        <h1 className="text-3xl font-medium">Products</h1>
        <div className="w-full sm:w-48 lg:w-64">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className="outline-none font-normal text-sm"
            placeholder="For Item Sorting ."
          />
        </div>
      </div>

      <div onClick={navigateToLoginUp} className="w-full h-fit py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-fit flex flex-col gap-y-4 pb-3"
          >
            <div className="w-full h-48 lg:h-60  bg-[#F5F5F5] cursor-pointer border-gray-300 flex justify-center items-center relative group">
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
                <p className="text-white text-base font-medium">Add To Cart</p>
              </div>
            </div>

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
  );
};
