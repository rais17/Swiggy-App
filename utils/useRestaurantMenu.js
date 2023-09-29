import { swiggy_menu_api_URL } from "../src/Components/constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [restrauntMenu, setRestrauntMenu] = useState([]); // Recommended
  const [restrauntInfo, setRestrauntInfo] = useState({}); // Restaurant Information
  const [categoryType, setCategoryType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestrauntInfo(resId);
  }, []);

  const getRestrauntInfo = async (resId) => {
    try {
      const data = await fetch(swiggy_menu_api_URL + resId);
      const json = await data.json();

      setIsLoading(false);

      setRestrauntInfo(json?.data?.cards[0]?.card?.card?.info);

      let groupedCard = null;
      let response = json.data.cards;

      // Check if groupedCard is at index 2 under card.card.groupCard
      if (
        response[2] &&
        response[2].card &&
        response[2].card.card &&
        response[2].card.card.groupedCard
      ) {
        groupedCard = response[2].card.card.groupedCard;
      }

      // Check if groupedCard is a separate object within the array
      const groupedCardObject = response.find(
        (item) => item.groupedCard && item.groupedCard.cardGroupMap,
      );

      if (groupedCardObject) {
        groupedCard = groupedCardObject.groupedCard;
      }


      console.log()
      const itemsArray =
          groupedCard?.cardGroupMap?.REGULAR
          ?.cards;
        

      const recommendedObj = itemsArray.find(
        (obj) =>
          obj.card.card["@type"].includes(
            "type.googleapis.com/swiggy.presentation.food.v2",
          ) && obj.card.card.title === "Recommended",
      );

      let recommended;
      if (recommendedObj) recommended = recommendedObj.card.card.itemCards;

      setRestrauntMenu(recommended);

      const filteredItemsArray = itemsArray.filter(
        (obj) => obj.card.card.title !== "Recommended",
      );

      const filteredItemsArrayAgain = filteredItemsArray
        .slice(2, 12)
        .map((obj) => obj.card?.card?.itemCards);

      setCategoryType(filteredItemsArrayAgain);
      
    } catch (error) {
      console.error(error.message);
    }
  };

  return { restrauntMenu, restrauntInfo, categoryType, isLoading };
}

export default useRestaurantMenu;