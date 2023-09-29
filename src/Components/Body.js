import React from "react";
import {Shimmer} from "./Shimmer";
import OfferCarousel from "./OfferCarousel";
import FavCarousel from "./FavCarousel";
import TopRestaurentCarousel from "./TopRestaurentCarousel";
import OnlineRestaurant from "./OnlineRestaurant";
import useRestaurant from "../../utils/useRestaurant";

const Body = () => {

  const {
    isLoading,
    offers,
    whatsOnMind,
    topRestaurant,
    onlineRestaurant,
  } = useRestaurant();

  console.log("topRestaurant", topRestaurant);
  console.log("onlineRestaurant", onlineRestaurant);

  return isLoading ? (
    <Shimmer />
  ) : (
      <div className="w-11/12 max-w-[1150px] mx-auto min-h-screen">
        <OfferCarousel offers={offers} />
        <FavCarousel whatsOnMind={whatsOnMind} />
        <TopRestaurentCarousel topRestaurant={topRestaurant} />
        <OnlineRestaurant onlineRestaurant={onlineRestaurant} />
      </div>
  );
};

export default Body;
