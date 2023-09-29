import React from 'react'
import { ITEM_IMG_CDN_URL } from './constant'
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem } from "../../utils/cartSlice";

const CartItemCard = ({ name, imageId, price, quantity, id, incrementedPrice }) => {

  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(incrementItem(id));
  }

  const decrementCartItem = () => {
    dispatch(decrementItem(id));
  }

  console.log("quantity", quantity);
  return (
    <div className="flex items-center justify-between w-full gap-x-6">
      <div className="flex items-center gap-x-4">
        <div className="w-28 min-w-[112px]">
          <img
            className="object-cover w-full aspect-video"
            src={ITEM_IMG_CDN_URL + imageId}
            alt=""
          />
        </div>

        <h1 className="font-sans text-lg font-normal">{name}</h1>
      </div>

      <div className="flex items-center gap-x-3">
        <div className="flex items-center px-4 space-x-4 border">
          <button onClick={() => decrementCartItem()}>-</button>
          <p className="font-sans text-base font-normal">{quantity}</p>
          <button onClick={() => incrementCartItem()}>+</button>
        </div>

        <h1 className="font-sans text-lg font-medium">
          {incrementedPrice / 100}
        </h1>
      </div>
    </div>
  );
};

export default CartItemCard