import React, {useState} from "react";
import { GiWheelbarrow } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { CLD_CDN_URL } from "./constant";
import {PiCurrencyInrLight} from "react-icons/pi"



const SearchDishListCard = ({ restaurantInfo, itemInfo }) => {
  const { name, avgRating, sla } = restaurantInfo;
  const { price, description, imageId, ribbon } = itemInfo;

  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="flex min-h-min md:w-1/2 lg:max-w-[49%] flex-col space-y-4 rounded-2xl border bg-white sm:px-4 px-2 py-5 shadow-md">
      {/* restaurant info */}
      <div className="space-y-1 border-b-[1px] border-dashed pb-4">
        <h1 className="font-sans text-sm font-semibold text-[#686b78]">
          By {name}
        </h1>
        <div className="flex items-center space-x-2 font-sans text-xs font-normal text-[#7e808c]">
          <div className="flex items-center space-x-1">
            <AiFillStar style={{ color: "7e808c", fontSize: "16" }} />
            <h2 className="mr-3">{avgRating}</h2>
          </div>
          <h2>{sla?.slaString}</h2>
        </div>
      </div>
      {/* item info */}
      <div className="flex items-center justify-center md:justify-between">
        <div className="w-2/3 pr-2">
          <div className="flex items-center space-x-2">
            <GiWheelbarrow style={{ color: "#e43b4f" }} />
            {ribbon.text && (
              <div className="flex items-center gap-x-[2px]">
                <AiFillStar style={{ color: "#ee9c00" }} />
                <h1 className="font-sans text-sm font-medium text-[#ee9c00]">
                  {ribbon?.text}
                </h1>
              </div>
            )}
          </div>

          <h1 className="font-sans text-base font-medium text-[#3e4152]">
            {itemInfo?.name}
          </h1>
          <h1 className="flex items-center space-x-1 font-sans text-sm font-normal text-[#3e4152]">
            <PiCurrencyInrLight />
            {price / 100}
          </h1>
          {showFullText ? (
            <div className="mt-3 font-sans text-sm font-normal text-[#282c3f73]">
              <p>{description}</p>
              <button
                className="mt-1 font-sans text-sm font-semibold text-[#686b78]"
                onClick={() => setShowFullText(false)}
              >
                Less
              </button>
            </div>
          ) : (
            description && ( // Check if description exists
              <div className="mt-3 font-sans text-sm font-normal text-[#282c3f73]">
                <p>{description.slice(0, 50)}...</p>
                {description.length > 50 && (
                  <button
                    className="mt-1 font-sans text-sm font-semibold text-[#686b78]"
                    onClick={() => setShowFullText(true)}
                  >
                    More
                  </button>
                )}
              </div>
            )
          )}
        </div>

        <div className="w-1/4">
          <img
            className="object-cover w-full h-auto rounded-lg aspect-square"
            src={CLD_CDN_URL + imageId}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchDishListCard;
