import React from 'react'
import { ITEM_IMG_CDN_URL } from './constant';
import {AiFillStar} from "react-icons/ai"

const SearchRestaurantListCard = ({ itemInfo }) => {
  const { name, avgRating, sla, costForTwo, cuisines, cloudinaryImageId } = itemInfo;
  return (
    <div className="mb-5 flex min-h-fit w-11/12  items-center space-x-4 overflow-hidden text-ellipsis whitespace-nowrap bg-white px-4 pb-10 pt-5 md:w-1/2 md:max-w-[48%]">
      <div className="max-w-[88px] shadow-lg">
        <img
          className="object-cover w-full rounded-lg shadow-lg aspect-square"
          src={ITEM_IMG_CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-y-[2px]">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap font-sans text-base font-semibold text-[#3e4152]">
          {name}
        </h1>
        <div className="flex items-center space-x-3">
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
        <h2 className="font-sans text-[13px] font-normal text-[#93959f]">
          {cuisines.join(", ")}
        </h2>
      </div>
    </div>
  );
}

export default SearchRestaurantListCard