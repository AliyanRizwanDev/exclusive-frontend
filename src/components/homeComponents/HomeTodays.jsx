import React from 'react'
import { FaRegEye, FaRegHeart } from 'react-icons/fa'
import { homeItemDetails, homeItemImages } from '../../utils/data'

export const HomeTodays = ({imgSrc}) => {
  return (
    
            <div className="flex gap-x-9 ">
              {homeItemImages.homeItems.map((item, index ,) => (
                <div
                  key={index}
                  className="min-w-[282px] h-fit flex flex-col gap-y-4 pb-3"
                >
                  <div className="min-w-[250px] h-60 border bg-[#F5F5F5] cursor-pointer border-gray-300 flex justify-center items-center relative group">
                    <img
                      src={item.imgSrc}
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
                    <h1 className="text-base font-medium">
                      {homeItemDetails.title}
                    </h1>
                    <div className="w-fit h-fit flex gap-x-3">
                      <h1 className="text-base font-medium">
                        {homeItemDetails.price}
                      </h1>
                      <h1 className="text-base font-medium line-through text-gray-500">
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
            
  
  )
}
