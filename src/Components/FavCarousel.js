import React from 'react'
import { ITEM_IMG_CDN_URL } from "./constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const FavCarousel = ({ whatsOnMind }) => {

  return (
    whatsOnMind && (
      <div className="w-full p-4 space-y-3.5 border-b-[1px] pb-12">
        <h1 className="font-sans text-2xl font-bold">
          Hey, What's On Your Mind
        </h1>
        <Carousel responsive={responsive}>
          {whatsOnMind?.map((item) => {
            return (
              <div
                key={item?.id}
              >
                <img
                  className="object-center"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    )
  );
}

export default FavCarousel;