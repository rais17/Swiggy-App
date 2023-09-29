import React from 'react'
import { ITEM_IMG_CDN_URL } from "./constant";

const RestaurantListCard = ({
  restaurantDishSuggestionList,
  get_restaurant_and_dish_with_onClick,
}) => {
  return (
    <div className="w-full py-3">
      {restaurantDishSuggestionList?.map((item) => {
        return (
          <div
            key={item?.cloudinaryId}
            className="flex w-full items-center gap-x-3 px-4 py-3 transition-all duration-100 hover:bg-[#F2F6FC]"
            onClick={() =>
              get_restaurant_and_dish_with_onClick(item?.text, item.type)
            }
          >
            <div className="max-w-[64px]">
              <img
                className="object-cover rounded-sm aspect-square"
                src={ITEM_IMG_CDN_URL + item?.cloudinaryId}
                alt=""
              />
            </div>

            <div className="space-y-1">
              <h1 className="font-sans text-sm font-normal leading-[18px] text-[#282c3f]">
                {item?.text}
              </h1>
              <h2 className="font-sans text-xs font-normal text-[#7e808c]">
                {item?.type}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantListCard