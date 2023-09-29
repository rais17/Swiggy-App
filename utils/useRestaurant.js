
import { useState, useEffect } from 'react';
import { SWIGGY_URL } from '../src/Components/constant';

const useRestaurant = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [offers, setOffers] = useState([]);
    const [whatsOnMind, setWhatsOnMind] = useState([]);
    const [topRestaurant, setTopRestaurant] = useState([]);
    const [onlineRestaurant, setOnlineRestaurant] = useState([]);
  const [footerAppLink, setFooterAppLink] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getRestaurant();
    }, []);
  
    useEffect(() => {
      let combinedRestaurants;
      if (topRestaurant && onlineRestaurant) combinedRestaurants = [...topRestaurant, ...onlineRestaurant];
      setAllRestaurant(combinedRestaurants);

  }, [topRestaurant, onlineRestaurant]);

    const getRestaurant = async () => {
      try {
        const data = await fetch(SWIGGY_URL);
        const resultData = await data.json();

        console.log("resultData", resultData);
        setIsLoading(false);

        setOffers(
          resultData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.info
        );

        setWhatsOnMind(
          resultData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.info
        );

        setTopRestaurant(
          resultData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setOnlineRestaurant(
          resultData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setFooterAppLink(resultData?.data?.cards[10]?.card?.card);

        

      } catch (error) {
        console.log(`Error while fetching`);
      }
    };

    return {
      allRestaurant,
      offers,
      whatsOnMind,
      topRestaurant,
      onlineRestaurant,
      footerAppLink,
      isLoading
    };
}

export default useRestaurant