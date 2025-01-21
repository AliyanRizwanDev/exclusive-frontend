import React, { useState } from "react";
import {
  homeItemImages,
  homeItemDetails,
  homeLies,
  delivery,
  CUSTOMER_SERVICE,
  GUARANTEE,
} from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeadset, FaRegEye, FaRegHeart, FaTv } from "react-icons/fa";
import { HomeCatagories } from "../components/homeComponents/HomeCatagories";
import { CiHeadphones, CiMobile3 } from "react-icons/ci";
import {
  IoCameraOutline,
  IoShieldCheckmarkSharp,
  IoWatchOutline,
} from "react-icons/io5";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HomeTodays } from "../components/homeComponents/HomeTodays";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); 
  const navigateToSignUp = () => {
    navigate("/products"); 
  };

const [homeCounter , setHomeCounter] = useState(0)



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="w-full h-fit overflow-x-hidden overflow-y-hidden">
      <div className="w-full h-80 px-7 md:px-14 lg:px-20 xl:px-20 pt-4 flex flex-col lg:flex-row gap-x-10">
        <div className="w-full lg:w-[20%] h-fit">
          <ul className="list-none hidden lg:block">
            {homeLies.home.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer mt-2 hover:underline text-sm lg:text-base font-normal"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[80%] h-[240px] lg:h-[283px]  overflow-hidden">
          <Slider {...settings}>
            <div>
              <img
                src="./assets/home-images/slider2.jpg"
                alt="Slider Image 1"
                className="w-full h-[281px]"
              />
            </div>
            <div>
              <img
                src="./assets/home-images/slider1.jpg"
                alt="Slider Image 2"
                className="w-full h-[281px] object-cover"
              />
            </div>
            <div>
              <img
                src="./assets/home-images/slider3.jpg"
                alt="Slider Image 3"
                className="w-full h-[281px] object-cover"
              />
            </div>
            <div>
              <img
                src="./assets/home-images/slider4.jpg"
                alt="Slider Image 4"
                className="w-full h-[281px] object-cover"
              />
            </div>
            <div>
              <img
                src="./assets/home-images/slider5.jpg"
                alt="Slider Image 5"
                className="w-full h-[281px] object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="w-full h-fit px-7 md:px-14 lg:px-16 xl:px-24 py-10">
        <div className="w-full h-fit flex flex-col gap-y-4">
          <div className="w-full h-fit">
            <div className="w-full h-fit flex flex-col gap-y-6">
              <div className="w-fit h-fit flex gap-x-4 items-center">
                <div className="w-5 h-9 bg-[#DB4444] rounded-sm"></div>
                <h1 className="text-[#DB4444] text-sm lg:text-base font-semibold">
                  Today’s
                </h1>
              </div>
              <div className="w-full h-fit flex flex-col md:flex-row justify-start  md:justify-between items-start md:items-center gap-y-5 md:gap-y-0">
                <h1 className="text-2xl lg:text-4xl">Flash Sales</h1>
              </div>
            </div>
          </div>

          <div className="w-full h-fit">
            <div className="w-full py-6 flex overflow-x-auto overflow-y-hidden gap-x-10 scrollbar-hidden">
              <HomeTodays />
            </div>
          </div>
          <div className="w-full h-fit flex justify-center items-center">
            <button onClick={navigateToSignUp} className="w-fit px-7 lg:px-9 rounded-md py-3 lg:py-4 bg-[#DB4444] text-sm lg:text-base font-medium text-white transition-all duration-300 hover:bg-red-400">
              View All Products
            </button>
          </div>
        </div>
      </div>

      {/* Browse By Category */}
      <div className="w-full h-fit px-7 md:px-14 lg:px-16 xl:px-24 py-14 flex flex-col gap-y-6 lg:py-0">
        <div className="w-full h-fit flex flex-col gap-y-6">
          <div className="w-fit h-fit flex gap-x-4 items-center">
            <div className="w-5 h-9 bg-[#DB4444] rounded-sm"></div>
            <h1 className="text-[#DB4444] text-base font-semibold">
              Categories
            </h1>
          </div>
          <h1 className="text-4xl">Browse By Category</h1>
        </div>

        {/* Wrapping Grid Container */}
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-20">
          <HomeCatagories
            icon={<CiMobile3 className="text-4xl" />}
            lable="Phones"
          />
          <HomeCatagories
            icon={<FaTv className="text-4xl" />}
            lable="Computers"
          />
          <HomeCatagories
            icon={<IoWatchOutline className="text-4xl" />}
            lable="SmartWatch"
          />
          <HomeCatagories
            icon={<IoCameraOutline className="text-4xl" />}
            lable="Camera"
          />
          <HomeCatagories
            icon={<CiHeadphones className="text-4xl" />}
            lable="HeadPhones"
          />
          <HomeCatagories
            icon={<MdOutlineVideogameAsset className="text-4xl" />}
            lable="Gaming"
          />
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="w-full h-fit px-7 md:px-14 lg:px-16 xl:px-24 py-10">
        <div className="w-full h-fit flex flex-col gap-y-4">
          <div className="w-full h-fit">
            <div className="w-full h-fit flex flex-col gap-y-6">
              <div className="w-fit h-fit flex gap-x-4 items-center">
                <div className="w-5 h-9 bg-[#DB4444] rounded-sm"></div>
                <h1 className="text-[#DB4444] text-sm lg:text-base font-semibold">
                  This Month
                </h1>
              </div>
              <div className="w-full h-fit flex flex-col md:flex-row justify-start  md:justify-between items-start md:items-center gap-y-5 md:gap-y-0">
                <h1 className="text-2xl lg:text-4xl">Best Selling Products</h1>
                <button onClick={navigateToSignUp}  className="w-fit px-5 rounded-md py-4  bg-[#DB4444] text-sm font-medium text-white transition-all duration-300 hover:bg-red-400">
                  View All Products
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-fit">
            <div className="w-full py-6 flex overflow-x-auto overflow-y-hidden gap-x-10 scrollbar-hidden">
              <div className="w-full h-fit flex flex-col gap-y-8">
                <div className="flex gap-x-9">
                  {homeItemImages.homeItems.map((item, index) => (
                    <div
                      key={index}
                      className="min-w-[250px] lg:min-w-[282px] h-fit flex flex-col gap-y-4 pb-3"
                    >
                      <div className="min-w-[250px] h-48 lg:h-60 border bg-[#F5F5F5] cursor-pointer border-gray-300 flex justify-center items-center relative group">
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
                      <div className="w-[282px] h-fit flex flex-col gap-y-1">
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
          </div>
        </div>
      </div>

      {/* Delivery & Customer Service */}
      <div className="w-full h-fit py-14 px-4 lg:px-16 xl:px-24 flex flex-col gap-y-10">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[#DB4444]">
          Delivery & Customer Service
        </h2>

        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Delivery */}
          <div className="w-full h-fit flex flex-col items-center text-center">
            <LiaShippingFastSolid className="text-4xl text-[#DB4444]" />
            <h3 className="mt-4 text-lg lg:text-xl font-medium">
              {delivery.delivery}
            </h3>
            <p className="text-sm font-normal text-gray-600 mt-2">
              {delivery.priceAndDelivery}
            </p>
          </div>

          {/* Customer Service */}
          <div className="w-full h-fit flex flex-col items-center text-center">
            <FaHeadset className="text-4xl text-[#DB4444]" />
            <h3 className="mt-4 text-lg lg:text-xl font-medium">
              {CUSTOMER_SERVICE.CUSTOMER_SERVICE}
            </h3>
            <p className="text-sm font-normal text-gray-600 mt-2">
              {CUSTOMER_SERVICE.priceAndDelivery}
            </p>
          </div>

          {/* Guarantee */}
          <div className="w-full h-fit flex flex-col items-center text-center">
            <IoShieldCheckmarkSharp className="text-4xl text-[#DB4444]" />
            <h3 className="mt-4 text-lg lg:text-xl font-medium">
              {GUARANTEE.GUARANTEE}
            </h3>
            <p className="text-sm font-normal text-gray-600 mt-2">
              {GUARANTEE.priceAndDelivery}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
