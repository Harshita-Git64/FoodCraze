import { useDispatch, useSelector } from "react-redux";
import {
  clearFavouriteItems,
  removeFromFavourites,
} from "../utils/favouriteRestaurantSlice";
import { Link } from "react-router-dom";
import { CARDS_IMG } from "../utils/constants";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const FavouriteRestaurants = () => {
  const ResCard = useSelector(
    (cards) => cards.favourite.favouriteRestaurantList
  );
  const dispatch = useDispatch();
  const clearAllFavRest = () => {
    dispatch(clearFavouriteItems());
  };
  const handleRemoveItem = (index) => {
    dispatch(removeFromFavourites(index));
  };
  console.log(ResCard);

  return (
    // <div  className="flex flex-wrap justify-center ">
    //    {ResCard.map((items)=>(
    //     <div>
    //     {/* {items?.info?.name} */}
    //     <Cards resObj={items}/>
    //     </div>
    //    ))
    //    }
    // </div>
    <div className="mt-8">
      {ResCard.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-y-5">
          <img
            className="w-64"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/favorite-item-468446.png?f=webp"
          />
          <div className="text-center text-4xl font-semibold">
            <span>No Favourite Restaurants Added!! </span>
          </div>

          <div>
            <Link to="/">
              <button className="px-5 py-3 rounded-full bg-red-600 font-semibold text-white">
                ADD RESTAURANTS
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-5">
          <h1 className="text-center font-semibold text-xl">
            FAVOURITE RESTAURANTS
          </h1>
          <button
            className="p-2 font-bold text-white items-end flex justify-end bg-black rounded-lg"
            onClick={clearAllFavRest}
          >
            Clear Favourites
          </button>

          <div className="mx-64">
            {ResCard.map((e, index) => (
              <Link to={"/restaurant/" + e.info.id} key={e.info.id}>
                <div className="flex justify-between py-3 border-gray-300 border-b-2">
                  <div>
                    <div className="items-center">
                      <span className="font-black">{e?.info?.name}</span>
                      <span> - {e?.info?.costForTwo}</span>
                    </div>
                    <div className="flex items-center text-l font-thin text-sm my-2">
                      <span>
                        <IoLocationOutline />
                      </span>
                      <span>
                        {e?.info?.locality}, {e?.info?.areaName}
                      </span>
                    </div>
                    <div className="flex items-center text-sm gap-1">
                      <span>
                        <IoMdStar className="text-l text-green-600" />
                      </span>
                      <span className="text-green-600 font-semibold">
                        {e?.info?.avgRatingString}
                      </span>
                      <span className="font-thin">
                        ({e?.info?.totalRatingsString} ratings)
                      </span>
                    </div>
                  </div>

                  <div className="items-center justify-center flex flex-col">
                    <img
                      className="w-28 h-24 rounded-lg "
                      src={CARDS_IMG + e?.info?.cloudinaryImageId}
                      alt="img"
                    ></img>
                    <button
                      className="py-1 px-2 rounded-full font-bold text-white bg-red-500 -mt-5 "
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default FavouriteRestaurants;
