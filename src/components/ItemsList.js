import { useDispatch } from "react-redux";
import { ITEMS_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";

const ItemsList = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const handleItems = (items) => {
  dispatch(addItem(items));
  }
  return (
    <div>
      <p>
        {item?.itemCards.map((e) => (
          <div className="">
            <div className="flex justify-between py-5 border-gray-500 border-b-2">
              <div className="items-center flex">
                <span className="font-black">{e?.card?.info?.name}</span>
                <span> - ₹ {e?.card?.info?.price}</span>
              </div>
              <div className="items-end justify-center flex">
                <button
                  className="border-green-600 border text-green-500 font-semibold absolute mt-5 bg-white p-1 px-5 rounded-xl hover:cursor-pointer"
                  onClick={()=>handleItems(e)}
                >
                  Add
                </button>
                {(ITEMS_IMG + e.card.info.imageId) ?( 
                  <img
                    className="w-28 h-24 rounded-lg"
                    src={ITEMS_IMG + e.card.info.imageId}
                    alt=""
                  ></img>
                ):null}
              </div>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
};
export default ItemsList;
