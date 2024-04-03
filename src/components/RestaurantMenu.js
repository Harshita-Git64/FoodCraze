import { useEffect, useState } from "react";
import resData from "../utils/mockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { IoLocationOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

const RestaurantMenu = () => {
  // const[resInfo,setResInfo]= useState(null)
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, SetShowIndex] = useState(0);
  //const{name,cuisines,costForTwo}=resData[0]?.info;
  const fltr = resData.filter((e) => e.info.id === resId); //static

  // useEffect(()=>{
  // fetchData();
  // },[])+

  // const fetchData= async ()=>{
  //     const data= await fetch(REST_MENU+resId)
  //     const jsondata=await data.json();
  //     console.log(jsondata.data)

  //     setResInfo(jsondata.data)
  // }

  // const {name,cuisines,costForTwo}=fltr[0]?.info;

  // console.log(resInfo?.cards[2]?.card?.card?.info)
  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo?.cards[2]?.card?.card?.info.name)
  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    locality,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const filteredcategory =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("-----");

  console.log(filteredcategory);
  return (
    <div className="m-5">
      <div className="mx-64">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="flex items-center text-l font-thin text-sm my-2">
          <span>
            <IoLocationOutline className="font-bold" />
          </span>
          <span>
            {locality},{areaName}
          </span>
        </div>
        <div className="flex items-center font-semibold gap-1">
          <span>
            <MdStars className="text-xl text-green-700" />
          </span>
          <span>
            {avgRatingString} ({totalRatingsString}) ◦ {costForTwoMessage}
          </span>
        </div>
        <div className="border-2 bottom-1 border-dashed my-4 "></div>
      </div>
      <div className="font-semibold py-2 flex items-center justify-center ">
        Restaurant Menu <MdRestaurantMenu />
      </div>
      <p>
        {filteredcategory.map((e, index) => (
          <RestaurantCategories
            data={e?.card?.card}
            key={e?.card?.card.title}
            showItems={index === showIndex ? true : false}
            SetShowIndex={() => SetShowIndex(index)}
          />
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;