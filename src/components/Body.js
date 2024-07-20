import Cards, { Promotedrescards } from "./Cards";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOffline from "../utils/useOffline";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const [resList, setList] = useState([]);
  const [filteredRest, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const Promotedlabel = Promotedrescards(Cards);
  useEffect(() => {
    //fetchData();
    setList(resData);
    setFilteredRestaurant(resData);
  }, []);

  const fetchData=async()=>{
    try{
      const api=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=22.71700&lng=75.83370")
      if (!api.ok) {
        throw new Error(`HTTP error! status: ${api.status}`);
      }
      const output=await api.json();
      console.log("okk")
      console.log("fetched api",output.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants)
      const resData=output.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    
      setList(resData);
      setFilteredRestaurant(resData);
    }
    catch(err){
      console.log(err.message)
     }
  }
  //conditional rendering: rendering on the basis of condition
  const onlineStatus = useOffline();
  if (onlineStatus === false) {
    return (
      <div>
        <h1>You are offline!!</h1>
      </div>
    );
  }
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="overflow-y-scroll no-scrollbar">
      <div className="flex justify-between mx-36 my-6">
        <div className="flex justify-start gap-3">
        {/* Rating filter */}
        <button
          className="px-2 text-gray-600 text-base rounded-full border border-slate-300 "
          onClick={() => {
            const list = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurant(list);
          }}
        >
          Rating 4.0+
        </button>
        {/* offer filter */}
        <button
          className=" px-3 text-gray-600 text-base rounded-full border border-slate-300 "
          onClick={() => {
            const list = resList.filter(
              (restaurant) => restaurant.info.aggregatedDiscountInfoV3
            );
            setFilteredRestaurant(list);
          }}
        >
          Offers
        </button>
        {/* pure veg filter*/}
        <button
          className="px-3 text-gray-600 text-base rounded-full border border-slate-300 "
          onClick={() => {
            const list = resList.filter(
              (restaurant) => restaurant.info.veg===true
            );
            setFilteredRestaurant(list);
          }}
        >
          Pure Veg
        </button>
        </div>

        <div>
          <input
            type="text"
            className="text-base border border-slate-300  outline-none rounded-lg px-2 py-1 transition-all focus:border-blue-300 focus:border-2 w-52 "
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="ml-2 bg-green-400 px-3 py-1 border border-solid border-green-200 rounded-lg"
            onClick={() => {
              const searchlist = resList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchlist);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mx-10">
        {filteredRest.map((restaurant) => 
        (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ||
            restaurant.info.aggregatedDiscountInfoV2 ? (
              <Promotedlabel resObj={restaurant} />
            ) : (
              <Cards resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
