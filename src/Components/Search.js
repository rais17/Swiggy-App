import RestaurantListCard from "./RestaurantListCard";
import PopularCuisines from "../Components/PopularCuisines";
import useRestaurantSearch from "../../utils/useRestaurantSearch";
import SearchRestaurantList from "./SearchRestaurantList";
import { ShimmerSearch } from "./Shimmer";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const {
    popularCuisinesArray,
    restaurantDishArray,
    restaurantDishSuggestionList,
    searchText,
    handleSearch,
    get_restaurant_and_dish_with_onClick,
    handleSearchTextWithClick,
    isDish,
    isLoading,
  } = useRestaurantSearch();

  return (
    <div className="mx-auto flex min-h-screen w-11/12 max-w-[860px] flex-col items-center py-12">
      <div className="relative flex w-full">
        <input
          placeholder="Search for restaurant and food"
          className="w-full px-2 py-3 mb-3 border border-gray-400 focus:outline-none"
          type="text"
          value={searchText}
          onChange={(e) => handleSearch(e)}
        />
        <div
          onClick={() => handleSearchTextWithClick('')}
          className="absolute inset-y-0 flex items-center cursor-pointer right-3"
        >
          <RxCross2 />
        </div>
      </div>

      {restaurantDishArray?.length > 0 ? (
        <SearchRestaurantList
          restaurantDishArray={restaurantDishArray}
          isDish={isDish}
        />
      ) : searchText === "" ? (
        isLoading ? (
          <ShimmerSearch />
        ) : (
          <PopularCuisines
            popularCuisinesArray={popularCuisinesArray}
            handleSearchTextWithClick={handleSearchTextWithClick}
          />
        )
      ) : (
        <RestaurantListCard
          restaurantDishSuggestionList={restaurantDishSuggestionList}
          get_restaurant_and_dish_with_onClick={
            get_restaurant_and_dish_with_onClick
          }
        />
      )}
    </div>
  );
};

export default Search;
