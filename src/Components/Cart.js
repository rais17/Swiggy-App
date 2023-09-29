import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItemCard from './CartItemCard';
import { clearCart } from '../../utils/cartSlice';

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    
    const priceSum = cartItem.reduce((acc, currVal) => {
      console.log("Current Item Price:", currVal.price); 
      return acc + currVal.incrementedPrice;
    }, 0);

    setTotalPrice(priceSum);
  }, [cartItem]);

  const clearCartItems = () => {
    dispatch(clearCart());
  }

  console.log("cartItem", cartItem);
  console.log("totalPrice", totalPrice);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        className={`m-8 ${
          cartItem.length === 0 ? "w-11/12" : "max-w-xl"
        }space-y-4 p-8 shadow-lg`}
      >
        <div className="flex items-center justify-between pb-4 mb-5 border-b-2">
          <h1 className="font-sans text-xl font-bold">Cart Items</h1>
          <button
            onClick={() => clearCartItems()}
            className="px-4 py-1 font-sans text-xl font-normal text-white bg-slate-950"
          >
            Clear Cart
          </button>
        </div>

        <div className="w-full space-y-3">
          {cartItem.map((item) => (
            <CartItemCard key={item?.id} {...item} />
          ))}
        </div>

        <div className="flex justify-between py-3 border-t-2">
          <h1 className="font-sans text-xl font-bold">Total</h1>
          <p className="font-sans text-xl font-bold">{totalPrice / 100}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart