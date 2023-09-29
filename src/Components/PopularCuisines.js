import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ITEM_IMG_CDN_URL } from "./constant";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularCuisines = ({
  popularCuisinesArray,
  handleSearchTextWithClick,
}) => {
  return (
    <div className="w-full space-y-3.5 border-b-[1px] p-4 pb-12">
      <h1 className="font-sans text-lg font-bold text-[#3d4152]">
        Popular Cuisines
      </h1>
      <Carousel responsive={responsive}>
        {popularCuisinesArray.map((item) => {
          return (
            <div
              key={item?.id}
              onClick={() => {
                const value = item?.entityId?.split("=")[1];
                handleSearchTextWithClick(value);
              }}
            >
              <img
                className="object-center cursor-pointer"
                src={ITEM_IMG_CDN_URL + item?.imageId}
                alt="no image"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PopularCuisines