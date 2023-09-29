import React from 'react'
import Logo from './Logo';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import { useSelector } from "react-redux";


const Header = () => {
  
  const cartItem = useSelector((store) => store.cart.item);

  return (
    <div className="">
      <div className="fixed z-10 w-full bg-white shadow-md">
        <div className="header mx-auto max-w-[1200px]">
          <Logo />
          <ul className="space-x-4 text-base font-medium navbar text-opacity-60">
            <Link
              className=" flex items-center transition-colors duration-200 hover:text-[#f97316]"
              to="/"
            >
              Home
            </Link>

            <Link
              className=" flex items-center transition-colors duration-200 hover:text-[#f97316]"
              to="/search"
            >
              Search
            </Link>

            <Link
              className=" flex items-center transition-colors duration-200 hover:text-[#f97316]"
              to="/offer"
            >
              Offers
            </Link>

            <Link
              className=" flex items-center transition-colors  duration-200 hover:text-[#f97316]"
              to="/help"
            >
              Help
            </Link>

            <Link
              className=" flex items-center gap-x-1 transition-colors duration-200 hover:text-[#f97316]"
              to="/cart"
            >
              <CartIcon value={cartItem.length} />
              Cart
            </Link>
          </ul>
        </div>
      </div>
      <div className='w-full h-24'></div>
    </div>
  );
}

export default Header