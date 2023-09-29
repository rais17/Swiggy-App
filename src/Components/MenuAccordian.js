import React, { useState } from "react";
import RestaurantMenuCard from "../Components/RestaurantMenuCard";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const MenuAccordian = ({ restrauntDetails, heading }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="border-b-[14px] border-b-[#F1F1F6] py-4">
      <div className="flex justify-between">
        <div className="font-sans text-lg font-bold text-[#3e4152]">
          {heading ? (
            <h1>
              {heading} ({restrauntDetails?.length})
            </h1>
          ) : (
                <span role="img" aria-label="Warning Emoji">
                  ⚠️
                </span>
          )}
        </div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <MdOutlineKeyboardArrowDown style={{ fontSize: "25" }} />
          ) : (
            <MdOutlineKeyboardArrowUp style={{ fontSize: "25" }} />
          )}
        </button>
      </div>

      {isVisible &&
        restrauntDetails?.map((item) => {
          return (
            <RestaurantMenuCard
              key={item?.card?.info?.id}
              {...item?.card?.info}
            />
          );
        })}
    </div>
  );
};

export default MenuAccordian;
