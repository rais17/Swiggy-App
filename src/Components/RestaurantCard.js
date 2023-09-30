import React from 'react'
import { CLD_CDN_URL } from './constant';
import {AiFillStar} from "react-icons/ai"

const RestaurantCard = ({
                        name,
                        cloudinaryImageId,
                        areaName,
                        cuisines,
                        avgRating,
}) => {
    


    return (
      <div className="from0:max-from480:flex from0:max-from480:flex-col from0:max-from480:items-center transition-all duration-200 hover:scale-95 sm:max-w-[250px] ">
        <div className="">
          <img
            className="shadow-lg rounded-xl"
            src={CLD_CDN_URL + cloudinaryImageId}
            alt="Image Loading"
          />
        </div>

        <div className="px-3 mt-2">
          <h1 className="font-sans text-xl font-semibold from0:max-from480:text-center whitespace-nowrap">
            {name.split(" ").slice(0, 3).join(" ")}
          </h1>
          <div className="flex items-center from0:max-from480:justify-center gap-x-1">
            <AiFillStar style={{ color: "#FCD53F", fontSize: "20" }} />
            <h2 className="font-sans text-base font-semibold">{avgRating}</h2>
          </div>
          <h2 className="from0:max-from480:text-center whitespace-nowrap font-sans text-base font-normal leading-[22px] text-[#02060cbf] text-opacity-20">
            {cuisines.slice(0, 3).join(", ")}
          </h2>
          <h3 className="from0:max-from480:text-center whitespace-nowrap font-sans text-base font-normal leading-[22px] text-[#02060cbf] text-opacity-20">
            {areaName}
          </h3>
        </div>
      </div>
    );
};

export default RestaurantCard
