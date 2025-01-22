import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Products = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.18.134:3000/api/product");
        setApiData(response.data.data || []);
        console.log("Fetched Data:", response.data.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetail = (productID) => {
    console.log("Product ID:", productID); 
    navigate(`/productDetailPage/${productID}`);
  };

  const options = [
    { value: "Sort By A To Z", label: "Sort By A To Z" },
    { value: "Sort By Z To A", label: "Sort By Z To A" },
    { value: "Higher Price", label: "Higher Price" },
    { value: "Lower Price", label: "Lower Price" },
    { value: "Best Review", label: "Best Review" },
  ];

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  useEffect(() => {
    if (selectedOption) {
      const criteria = selectedOption.value;
      const sortedArray = [...apiData];

      switch (criteria) {
        case "Sort By A To Z":
          sortedArray.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Sort By Z To A":
          sortedArray.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "Higher Price":
          sortedArray.sort((a, b) => b.discounted_price - a.discounted_price);
          break;
        case "Lower Price":
          sortedArray.sort((a, b) => a.discounted_price - b.discounted_price);
          break;
        case "Best Review":
          sortedArray.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }

      setApiData(sortedArray);
    }
  }, [selectedOption]);

  return (
    <div className="w-full h-fit flex flex-col gap-y-4 px-4 sm:px-10 lg:px-20">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-y-4 pt-5">
        <h1 className="text-3xl font-medium">Products</h1>
        <div className="w-full sm:w-48 lg:w-64">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className="outline-none font-normal text-sm"
            placeholder="Sort Items"
          />
        </div>
      </div>

      <div className="w-full py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {apiData.length > 0 ? (
          apiData.map((item, index) => (
            <div
              key={item._id}
              className="w-full h-fit flex flex-col gap-y-4 pb-3"
              onClick={() => navigateToProductDetail(item._id)} 
            >
              <div className="w-full h-48 lg:h-60 bg-[#F5F5F5] cursor-pointer border-gray-300 flex justify-center items-center relative group">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-40 h-40 object-contain"
                />
                <div className="w-5 h-fit absolute top-3 right-3 flex flex-col gap-y-4">
                  <FaRegHeart className="text-xl cursor-pointer" />
                  <FaRegEye className="text-xl cursor-pointer" />
                </div>
                <div className="w-full h-11 rounded-md absolute bottom-0 bg-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-base font-medium">Add To Cart</p>
                </div>
              </div>
              <div className="w-full h-fit flex flex-col gap-y-1">
                <h1 className="text-sm lg:text-base font-medium">{item.name}</h1>
                <div className="flex gap-x-3">
                  <h1 className="text-sm lg:text-base font-medium">${item.discounted_price}</h1>
                  <h1 className="text-sm lg:text-base font-medium line-through text-gray-500">
                    ${item.price}
                  </h1>
                </div>
                <div className="flex gap-x-2 items-center">
                  <h1 className="text-sm font-medium">Review:</h1>
                  <h1 className="text-xs font-medium pt-[2px]">{item.ratings}</h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
};
