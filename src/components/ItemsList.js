import { useState } from "react";
import { useDispatch } from "react-redux";
import { ITEMS_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";
import { IoMdStar } from "react-icons/io";

const ItemsList = ({ item }) => {
  console.log(item);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const handleItems = (items) => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    dispatch(addItem(items));
  };
  return (
    <div>
      {item?.itemCards.map((e, index) => (
        <div className="flex justify-between py-3 border-gray-300 border-b-2">
          <div className="items-start flex flex-col w-9/12">
            <div>
              <span className="font-black">{e?.card?.info?.name}</span>
              <span> - ₹{e?.card?.info?.price / 100}</span>
            </div>

            {e?.card?.info?.ratings?.aggregatedRating?.rating && (
              <div className="flex items-center text-sm gap-1">
                <span>
                  <IoMdStar className="text-l text-green-600" />
                </span>
                <span className="text-green-600 font-semibold">
                  {e?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
                <span className="font-thin">
                  ({e?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </div>
            )}

            <div className="items-start flex  text-gray-600 text-l text-pretty ">
              <span>{e?.card?.info?.description}</span>
            </div>
          </div>

          <div className="items-end justify-center flex flex-col">
            {e.card.info.imageId && (
              <img
                className="w-28 h-24 rounded-lg"
                src={ITEMS_IMG + e.card.info.imageId}
                alt="img"
              ></img>
            )}
            {/* Add to cart button */}
            <button
              className="py-1 px-1 mr-3 rounded-md font-bold text-slate-50 text-xs bg-green-500 border border-green-500 hover:bg-green-600 "
              onClick={() => handleItems(e)}
            >
              ADD TO CART
            </button>
          </div>
          {showToast && (
            <div className="w-52 bg-green-400 fixed top-32 right-4 p-2 rounded font-serif">
              ✔ Item added to the cart!!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
