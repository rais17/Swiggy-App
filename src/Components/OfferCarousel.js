import React from "react";
import { CLD_CDN_URL, ITEM_IMG_CDN_URL } from "./constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const OfferCarousel = ({ offers, title}) => {
  return (
    offers && (
      <div className="w-full p-4 space-y-3.5">
        <h1 className="font-sans text-2xl font-bold">{title}</h1>

        
          <Carousel responsive={responsive} showDots={true}>
            {offers.map((item) => {
              return (
                <div className="mr-4 " key={item?.id}>
                  <img
                    className="object-cover rounded-2xl"
                    src={CLD_CDN_URL + item?.imageId}
                    alt=""
                  />
                </div>
              );
            })}
          </Carousel>

      </div>
    )
  );
};

export default OfferCarousel;
