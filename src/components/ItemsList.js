import { useDispatch } from "react-redux";
import { ITEMS_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";
import { IoMdStar } from "react-icons/io";

const ItemsList = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const handleItems = (items) => {
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

            <button
              className="py-1 px-1 rounded-full text-green-500 font-semibold bg-white border border-green-600 hover:bg-gray-200"
              onClick={() => handleItems(e)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
