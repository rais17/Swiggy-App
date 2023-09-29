import React from "react";
import useRestaurant from "../../utils/useRestaurant";
import RestaurantCard from "./RestaurantCard";
import { ShimmerOffer } from "./Shimmer";

const Offer = () => {
  const { allRestaurant, topRestaurant, onlineRestaurant } = useRestaurant();
  console.log("allRestaurant", allRestaurant);
  console.log("topRestaurant", topRestaurant);
  console.log("onlineRestaurant", onlineRestaurant);
  return allRestaurant.length === 0 ? (
    <ShimmerOffer />
  ) : (
    <div className="mx-auto min-h-screen w-11/12 max-w-[1100px] py-20">
      <h1 className="text-center font-sans text-2xl font-bold text-[#02060ceb] md:text-start">
        Restaurant With Great Offers Near Me
      </h1>
      <div className="flex flex-wrap justify-center gap-6 pt-10">
        {allRestaurant?.map((item) => {
          return <RestaurantCard key={item?.info?.id} {...item?.info} />;
        })}
      </div>
    </div>
  );
};

export default Offer;
