import React from "react";
import { CLD_CDN_URL } from "./constant";
import {PiCurrencyInrLight} from "react-icons/pi"
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantMenuCard = ({ name, description, imageId, price, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ name, description, imageId, price, id, quantity: 1, incrementedPrice: price }));
  }

  return (
    <div className="flex justify-between pt-3 border-b-2 gap-x-7 pb-9">
      {/* left side */}
      <div className="flex flex-col">
        <h1 className="font-sans text-base font-medium text-[#3e4152]">
          {name}
        </h1>

        <div className="flex items-center">
          <PiCurrencyInrLight />
          <p className="font-sans text-sm font-normal text-[#3e4152]">
            {price / 100}
          </p>
        </div>

        <p className="mt-[14px] font-sans text-sm font-normal text-[#282c3f73]">
          {description}
        </p>
      </div>

      {/* right-side */}
      <div className="relative flex h-3/4 max-w-[135px] justify-center">
        <img
          className="object-cover w-full rounded-lg"
          src={CLD_CDN_URL + imageId}
          alt=""
        />
        <button
          onClick={() => handleAddToCart()}
          className="absolute -bottom-1 rounded bg-white px-8 py-1 font-sans text-sm font-semibold text-[#60B246] shadow-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
