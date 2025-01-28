import React, { useState } from "react";

export const AdminPanel = () => {
  const [flashSales, setFlashSales] = useState({
    imageUrl: "",
    itemName: "",
    itemPrice: "",
    discountedPrice: "",
  });

  const [bestSelling, setBestSelling] = useState({
    imageUrl: "",
    itemName: "",
    itemPrice: "",
    discountedPrice: "",
  });

  const handleFlashSalesChange = (e) => {
    const { name, value } = e.target;
    setFlashSales((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBestSellingChange = (e) => {
    const { name, value } = e.target;
    setBestSelling((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFlashSalesSubmit = () => {
    const { imageUrl, itemName, itemPrice, discountedPrice } = flashSales;
    if (!imageUrl || !itemName || !itemPrice || !discountedPrice) {
      alert("All fields in Flash Sales must be filled out.");
      return;
    }
    console.log("Flash Sales:", flashSales);
    setFlashSales({
      imageUrl: "",
      itemName: "",
      itemPrice: "",
      discountedPrice: "",
    });
  };

  const handleBestSellingSubmit = () => {
    const { imageUrl, itemName, itemPrice, discountedPrice } = bestSelling;
    if (!imageUrl || !itemName || !itemPrice || !discountedPrice) {
      alert("All fields in Best Selling Products must be filled out.");
      return;
    }
    console.log("Best Selling Products:", bestSelling);
    setBestSelling({
      imageUrl: "",
      itemName: "",
      itemPrice: "",
      discountedPrice: "",
    });
  };

  return (
    <div className="w-full h-fit px-10 sm:px-14 lg:px-20 py-5 flex flex-col gap-y-6">
      {/* Flash Sales Section */}
      <div className="w-full h-fit flex flex-col gap-y-8">
        <div className="w-fit h-fit flex gap-x-3 items-center">
          <div className="w-4 h-7 rounded-sm bg-[#DB4444]"></div>
          <h1 className="text-sm font-semibold text-[#DB4444]">
            Admin Panel Flash Sales
          </h1>
        </div>
        <div className="w-full h-fit flex flex-col gap-y-5">
          <h1 className="text-4xl font-bold">Flash Sales</h1>
          <h1 className="text-base font-semibold text-[#DB4444]">
            Add New Items In Flash Sales
          </h1>
          <div className="w-full h-fit py-3 flex flex-col lg:flex-row gap-y-7 lg:gap-y-0 justify-start lg:justify-between">
            <input
              name="imageUrl"
              value={flashSales.imageUrl}
              onChange={handleFlashSalesChange}
              className="w-full lg:w-1/5 h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="text"
              placeholder="Enter Image URL!"
            />
            <input
              name="itemName"
              value={flashSales.itemName}
              onChange={handleFlashSalesChange}
              className="w-full lg:w-1/5  h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="text"
              placeholder="Enter Item Name!"
            />
           
            <input
              name="discountedPrice"
              value={flashSales.discountedPrice}
              onChange={handleFlashSalesChange}
              className="w-full lg:w-1/5 h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="number"
              placeholder="Enter Item Discounted Price!"
            />
             <input
              name="itemPrice"
              value={flashSales.itemPrice}
              onChange={handleFlashSalesChange}
              className="w-full lg:w-1/5  h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="number"
              placeholder="Enter Actual Item Price!"
            />
          </div>
          <div className="w-full h-fit flex justify-center">
            <button
              onClick={handleFlashSalesSubmit}
              className="w-full lg:w-14 h-6 px-24 py-6 text-white font-normal text-lg rounded-md flex justify-center items-center bg-[#DB4444]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Best Selling Products Section */}
      <div className="w-full h-fit flex flex-col gap-y-8">
        <div className="w-fit h-fit flex gap-x-3 items-center">
          <div className="w-4 h-7 rounded-sm bg-[#DB4444]"></div>
          <h1 className="text-sm font-semibold text-[#DB4444]">
            Admin Panel Best Selling Products
          </h1>
        </div>
        <div className="w-full h-fit flex flex-col gap-y-5">
          <h1 className="text-4xl font-bold">Best Selling Products</h1>
          <h1 className="text-base font-semibold text-[#DB4444]">
            Add New Items In Best Selling Products
          </h1>
          <div className="w-full h-fit py-3 flex flex-col lg:flex-row gap-y-7 lg:gap-y-0 justify-start lg:justify-between">
            <input
              name="imageUrl"
              value={bestSelling.imageUrl}
              onChange={handleBestSellingChange}
              className="w-full lg:w-1/5  h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="text"
              placeholder="Enter Image URL!"
            />
            <input
              name="itemName"
              value={bestSelling.itemName}
              onChange={handleBestSellingChange}
              className="w-full lg:w-1/5  h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="text"
              placeholder="Enter Item Name!"
            />
              <input
              name="discountedPrice"
              value={bestSelling.discountedPrice}
              onChange={handleBestSellingChange}
              className="w-full lg:w-1/5  h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="number"
              placeholder="Enter Item Discounted Price!"
            />
            <input
              name="itemPrice"
              value={bestSelling.itemPrice}
              onChange={handleBestSellingChange}
              className="w-full lg:w-1/5 h-10 bg-gray-200 px-3 text-sm font-normal outline-none rounded-md placeholder:text-gray-600 placeholder:text-sm"
              type="number"
              placeholder="Enter Actual Item Price!"
            />
          
          </div>
          <div className="w-full h-fit flex justify-center">
            <button
              onClick={handleBestSellingSubmit}
              className="w-full lg:w-14 h-6 px-24 py-6 text-white font-normal text-lg rounded-md flex justify-center items-center bg-[#DB4444]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
