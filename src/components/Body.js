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

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.717&lng=75.8337"
    );
    const jsondata = await data.json();
    //setList(resList);
    setFilteredRestaurant(jsondata?.data?.Cards);
    //console.log(jsondata);
  };
  //conditinal rendering: rendering on the basis of condition
  const onlineStatus = useOffline();
  if (onlineStatus === false) {
    return (
      <div>
        <h1>You are offline!!</h1>
      </div>
    );
  }
  // if(resList.length ===0)
  // {
  //     return (<Shimmer />);
  // }
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="overflow-y-scroll no-scrollbar">
      <div className="flex justify-between mx-36 my-6">
        <button
          className="hover:bg-gray-100 px-4 py-2 text-gray-500 text-base rounded-full border border-slate-400 "
          onClick={() => {
            const list = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurant(list);
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="">
          <input
            type="text"
            className="text-base border border-solid outline-none rounded-lg px-2 py-1 transition-all focus:border-blue-300 focus:border-2 w-52 "
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
        {/* { <Cards resObj={resData[0]}/>
            <Cards resObj={resData[1]}/>
            <Cards resObj={resData[2]}/>
            <Cards resObj={resData[3]}/>
            <Cards resObj={resData[4]}/>
            <Cards resObj={resData[5]}/>
            <Cards resObj={resData[6]}/>
            <Cards resObj={resData[7]}/>
            <Cards resObj={resData[8]}/> } */}
        {filteredRest.map((restaurant) => (
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
