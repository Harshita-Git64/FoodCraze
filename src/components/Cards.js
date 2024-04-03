import { CARDS_IMG } from "../utils/constants";
import { MdStars } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavourites } from "../utils/favouriteRestaurantSlice";

const Cards = (props) => {
  const { resObj } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    aggregatedDiscountInfoV3,
    sla,
  } = resObj?.info;

  const dispatch = useDispatch();
  const AddToFavourites = (cardItems) => {
    dispatch(addToFavourites(cardItems));
  };
  return (
    <div className="m-3 w-[240px] h-[280px] p-1 rounded-lg border shadow-md transition-all hover:scale-95 hover:bg-gray-100  drop-shadow-md">
      <div className="relative">
        <div
          className="absolute bottom-1 left-2 font-extrabold text-white text-lg 
         text-end z-10"
        >
          {aggregatedDiscountInfoV3?.header}
          {aggregatedDiscountInfoV3?.subHeader}
        </div>

        <div class=" overflow-hidden flex">
          <img
            className="w-full h-[150px] rounded-lg border-stone-700 object-cover brightness-90 backdrop-contrast-50 block"
            src={CARDS_IMG + cloudinaryImageId}
          ></img>
          <div
            className="absolute right-1 text-white hover:text-red-500 text-2xl"
            onClick={() => AddToFavourites(resObj)}
          >
            <IoMdHeart />
          </div>
          <div class="absolute inset-x-0 bottom-0 h-10 shadow-inner"></div>
        </div>
      </div>
      <div className="font-bold pt-2 pl-1 overflow-hidden whitespace-nowrap text-ellipsis z-10">
        {name}
      </div>
      <div className="pl-1 flex items-center gap-1 font-semibold">
        {avgRating && <MdStars className="text-xl text-green-500" />}
        <span>{avgRating}</span>
        <span>∘ {sla.slaString}</span>
      </div>
      <p className="pl-1 text-wrap line-clamp-2 text-gray-600 text-l">
        {cuisines.join(", ")}
      </p>
    </div>
  );
};

export const Promotedrescards = (Cards) => {
  return (props) => {
    return (
      <div>
        <span className="p-2 bg-orange-400 text-white font-semibold rounded-lg absolute z-20">
          Promoted
        </span>
        <Cards {...props} />
      </div>
    );
  };
};
export default Cards;
