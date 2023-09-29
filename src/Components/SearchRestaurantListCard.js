import React from 'react'
import { ITEM_IMG_CDN_URL } from './constant';
import {AiFillStar} from "react-icons/ai"

const SearchRestaurantListCard = ({ itemInfo }) => {
  const { name, avgRating, sla, costForTwo, cuisines, cloudinaryImageId } = itemInfo;
  return (
    <div className="from0:max-from480:flex-col from0:max-from480:space-y-3 mb-5 flex min-h-fit w-11/12 items-center space-x-4  bg-white px-4 pb-10 pt-5 md:w-1/2 md:max-w-[48%]">
      <div className="from0:max-from480:w-full w-[88px] shadow-lg">
        <img
          className="object-cover w-full rounded-lg shadow-lg aspect-square"
          src={ITEM_IMG_CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-y-[2px]">
        <h1 className="from0:max-from480:text-center font-sans text-base font-semibold text-[#3e4152]">
          {name}
        </h1>
        <div className="flex items-center space-x-3 from0:max-from480:justify-center">
          <AiFillStar style={{ color: "#ee9c00" }} />
          <p className="font-sans text-xs font-medium text-[#696b79]">
            {avgRating}
          </p>

          <p className="font-sans text-xs font-medium text-[#696b79]">
            {sla?.slaString}
          </p>
          <p className="font-sans text-xs font-medium text-[#696b79]">
            {costForTwo}
          </p>
        </div>
        <h2 className="from0:max-from480:text-center font-sans text-[13px] font-normal text-[#93959f]">
          {cuisines.join(", ")}
        </h2>
      </div>
    </div>
  );
}

export default SearchRestaurantListCard
