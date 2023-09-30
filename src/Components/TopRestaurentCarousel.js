import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1180 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2.1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 640, min: 464 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TopRestaurentCarousel = ({ topRestaurant }) => {
  console.log("InsideTopRestaurantCarousel", topRestaurant);
  return (
    topRestaurant && (
      <div className="mt-10 w-full space-y-3.5 border-b-[1px] px-4 pb-10">
        <h1 className="font-sans text-2xl font-bold">Top Restaurant</h1>

        <Carousel responsive={responsive}>
          {topRestaurant.map((topRestaurant) => {
            return (
              <Link
                to={"/restaurant/" + topRestaurant?.info?.id}
                key={topRestaurant?.info?.id}
              >
                <RestaurantCard {...topRestaurant?.info} />
              </Link>
            );
          })}
        </Carousel>
      </div>
    )
  );
};

export default TopRestaurentCarousel;
