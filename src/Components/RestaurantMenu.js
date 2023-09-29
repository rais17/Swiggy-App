import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { AiFillStar } from "react-icons/ai";
import MenuAccordian from "./MenuAccordian";
import { ShimmerRestaurantMenu } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restrauntInfo, restrauntMenu, categoryType, isLoading } =
    useRestaurantMenu(resId);

  console.log("restrauntMenu", restrauntMenu);
  console.log("restrauntInfo", restrauntInfo);
  console.log("categoryType", categoryType);

  return isLoading ? (
    <ShimmerRestaurantMenu />
  ) : (
    <div className="mx-auto mb-16 w-11/12 max-w-[800px]">
      <div className="mb-[18px] w-full flex justify-between border-b-2 border-dashed py-4 ">
        {/* Restraunt Info */}

        {/* left-side */}
        <div className="">
          <h1 className="mb-2 font-sans text-xl font-bold text-[#282c3f]">
            {restrauntInfo?.name}
          </h1>
          <p className="font-sans text-sm font-normal text-[#7e808c]">
            {restrauntInfo?.cuisines?.join(", ")}
          </p>

          <div className="flex gap-x-1">
            <p className="font-sans text-sm font-normal text-[#7e808c]">
              {restrauntInfo?.areaName},
            </p>
            <p className="font-sans text-sm font-normal text-[#7e808c]">
              {restrauntInfo?.sla?.lastMileTravelString}
            </p>
          </div>
        </div>

        {/* right-side */}
        <div className="flex flex-col p-2 border rounded-md">
          <div className="mb-2 flex items-center gap-x-1 border-b-2 pb-[10px]">
            <AiFillStar style={{ color: "#3d9b6d", fontSize: "20" }} />
            <p className="font-sans text-sm font-extrabold text-[#3d9b6d]">
              {restrauntInfo?.avgRating}
            </p>
          </div>

          <p className="font-sans text-[10px] font-bold text-[#8b8d97]">
            {restrauntInfo?.totalRatingsString}
          </p>
        </div>
      </div>

      <MenuAccordian restrauntDetails={restrauntMenu} heading={"Recommended"} />

      {categoryType
        .filter((item) => item !== undefined)
        .map((item, index) => {
          return (
            <MenuAccordian
              key={item?.card?.info?.id}
              restrauntDetails={item}
              heading={item[index]?.card?.info?.category}
            />
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
