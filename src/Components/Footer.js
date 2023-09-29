import React from 'react'
import { ITEM_IMG_CDN_URL } from "./constant";
import useRestaurant from '../../utils/useRestaurant';
import { Link } from 'react-router-dom';
// font-sans text-3xl leading-8 font-bold text-[#02060cbf]
const Footer = () => {

  const { footerAppLink } = useRestaurant();

  return (
    <div className='bg-gray-200 '>
      <div className="hidden md:flex mt-6 items-center justify-between max-w-[1024px] mx-auto py-4 gap-x-5">
        <h1 className="font-sans text-3xl leading-8 font-bold my-auto text-[#02060cbf] mr-6">
          For better experience,download the Swiggy app now
        </h1>
        <div className="flex justify-center h-16 gap-5 mx-2 my-auto min-w-fit">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="googleplay"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="appstore"
          />
        </div>
      </div>
      <footer className="mt-6 md:mt-0 bg-[#02060C] text-white py-12 px-8 md:px-56">
        <div className="container grid grid-cols-1 gap-4 mx-auto text-center md:grid-cols-4">
          <div className="col-end-auto row-start-1 row-end-5 md:col-start-1">
            <h2 className="text-2xl font-bold">Swiggy</h2>
            <h4 className="my-4 text-gray-300">© 2023 made By Arshad Rais</h4>
          </div>

          <div className="md-col-start-2">
            <h2 className="text-lg font-bold">Company</h2>
            <ul>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Team
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Swiggy One
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Swiggy Instamart
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Swiggy Genie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <ul>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Help & Support
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Partner with us
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Ride with us
                </Link>
              </li>
              {/* Add more links here */}
            </ul>
          </div>

          <div className="md:col-start-3 md:-mt-24">
            <h2 className="mb-4 text-lg font-bold">Legal</h2>
            <ul>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              {/* Add more links here */}
            </ul>
          </div>
          <div className="md:col-start-4 md:row-start-1">
            <h2 className="mb-4 text-lg font-bold">We deliver to:</h2>
            <ul>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Bangalore
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Delhi
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Kolkata
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Mumbai
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Ahmedabad
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="#"
                  className="text-gray-300 transition duration-300 hover:text-white"
                >
                  Pune
                </Link>
              </li>
              {/* Add more links here */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer