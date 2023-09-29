import React from 'react'
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const OnlineRestaurant = ({onlineRestaurant}) => {
  return (
    onlineRestaurant && (
      <div className=" mx-auto mt-6 space-y-3.5 p-4">
        <h1 className="font-sans text-2xl font-bold">Online Restaurant</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {onlineRestaurant.map((onlineRestaurant) => {
            return (
              <Link
                to={"/restaurant/" + onlineRestaurant?.info?.id}
                key={onlineRestaurant?.info?.id}
              >
                <RestaurantCard {...onlineRestaurant?.info} />
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
}

export default OnlineRestaurant;