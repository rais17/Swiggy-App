import React from "react";
import SearchRestaurantListCard from "./SearchRestaurantListCard";
import SearchDishListCard from "./SearchDishListCard";

const SearchRestaurantList = ({ restaurantDishArray, isDish }) => {
  return (
    <div className="w-full">
      {isDish === "DISH" ? (
        <div className="flex w-full flex-wrap justify-center gap-4 bg-[#F1F2F4] px-4 py-6">
          {restaurantDishArray.map((item) => (
            <SearchDishListCard
              key={item?.card?.card?.info?.id}
              itemInfo={item?.card?.card?.info}
              restaurantInfo={item?.card?.card?.restaurant?.info}
            />
          ))}
        </div>
      ) : (
        <div className="w-full border bg-[#F5F6F8] py-10">
          <div className="pb-5 px-7">
            <SearchRestaurantListCard
              itemInfo={restaurantDishArray[0]?.card?.card?.info}
            />
          </div>
          <h1 className="px-7 font-sans text-base font-bold text-[#282c3f]">
            {restaurantDishArray[1]?.card?.card?.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center w-full px-4 py-2 gap-x-1">
            {restaurantDishArray[1]?.card?.card?.restaurants?.map((item) => (
              <SearchRestaurantListCard
                key={item?.info?.id}
                itemInfo={item?.info}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchRestaurantList;
