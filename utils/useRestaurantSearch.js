import { useState, useEffect } from "react";
import { POPULAR_CUISINES_URL } from "../src/Components/constant";

// type.googleapis.com/swiggy.presentation.food.v2.RestaurantCollection

const useRestaurantSearch = () => {
  const [popularCuisinesArray, setPopularCuisinesArray] = useState([]);
  const [restaurantDishArray, setRestaurantDishArray] = useState([]);
  const [restaurantDishSuggestionList, setRestaurantDishSuggestionList] =
    useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDish, setIsDish] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log("popularCuisinesArray", popularCuisinesArray);
  console.log("restaurantDishArray", restaurantDishArray);
  console.log("restaurantDishSuggestionList", restaurantDishSuggestionList);
  console.log("searchText", searchText);

  useEffect(() => {
    getPopularCuisines();
  }, []);

  useEffect(() => {
    setRestaurantDishArray([]);
    get_restaurant_and_dish_suggestion_list();
  }, [searchText]);

  const getPopularCuisines = async () => {
    try {
      const popular_cuisines = await fetch(POPULAR_CUISINES_URL);
      const popular_cuisines_json = await popular_cuisines.json();    

      setPopularCuisinesArray(
        popular_cuisines_json?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.info,
      );

      setIsLoading(false);
    } catch (error) {}
  };

  const get_restaurant_and_dish_with_onClick = async (
    searchName,
    isRestaurant,
  ) => {
    try {
      const restaurant_dish = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=${searchName}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bc9bbc65-5d8b-0aa5-bbdc-65b467e6afdb`,
      );
      const restaurant_dish_json = await restaurant_dish.json();

      if (isRestaurant === "RESTAURANT") {
        let tempRestaurant =
          restaurant_dish_json?.data?.cards[1]?.groupedCard?.cardGroupMap
            ?.RESTAURANT.cards;
        setRestaurantDishArray(tempRestaurant);
      }

      if (isRestaurant === "DISH") {
        let tempRestaurant =
          restaurant_dish_json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.slice(
            3,
          );
        setRestaurantDishArray(tempRestaurant);
      }

      setIsDish(isRestaurant);

      setIsLoading(false);
    } catch (error) {}
  };

  const get_restaurant_and_dish_suggestion_list = async () => {
    try {
      const restaurant_and_dish_suggestion_list = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${searchText}&trackingId=undefined`,
      );
      const restaurant_and_dish_suggestion_list_json =
        await restaurant_and_dish_suggestion_list.json();
      
      setRestaurantDishSuggestionList(
        restaurant_and_dish_suggestion_list_json?.data?.suggestions,
      );

      setIsLoading(false);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchTextWithClick = (value) => {
    setSearchText(value);
  };

  return {
    popularCuisinesArray,
    restaurantDishArray,
    restaurantDishSuggestionList,
    searchText,
    handleSearch,
    get_restaurant_and_dish_with_onClick,
    handleSearchTextWithClick,
    isDish,
    isLoading
  };
};

export default useRestaurantSearch;
