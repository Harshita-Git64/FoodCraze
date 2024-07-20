import { useDispatch, useSelector } from "react-redux";
import { ITEMS_IMG } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [showToast, setShowToast] = useState(false);
  const cartItem = useSelector((stores) => stores.cart.items);
  const dispatch = useDispatch();
  const clearAllCartItems = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (index) => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    dispatch(removeItem(index));
  };
  console.log(cartItem);
  return (
    <div className="mt-8">
      {cartItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-y-5">
          <img
            className="w-64"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp"
          />
          <div className="text-center text-4xl font-semibold">
            <span>Your Cart is </span>
            <span className="text-red-600">Empty!!</span>
          </div>
          <div className="font-thin text-gray-600">
            Must add items on the cart before you proceed to check out.
          </div>
          <div>
            <Link to="/">
              <button className="px-5 py-3 rounded-full bg-red-500 font-semibold text-white  hover:bg-red-600">
                ADD ITEMS
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-5">
          <h1 className="text-center font-semibold text-xl"> Cart Items</h1>
          <button
            className="p-2 font-bold text-white items-end flex justify-end bg-black rounded-lg"
            onClick={clearAllCartItems}
          >
            Clear Cart
          </button>

          <div className="mx-64">
            {cartItem.map((e, index) => (
              <div className="flex justify-between py-3 border-gray-300 border-b-2">
                <div className="items-start flex flex-col w-9/12">
                  <div>
                    <span className="font-black">{e?.card?.info?.name}</span>
                    <span> - ₹ {e?.card?.info?.price / 100}</span>
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
                        (
                        {
                          e?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </span>
                    </div>
                  )}
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
                    className="py-1 px-3  mr-4 rounded-md font-bold text-sm text-white  bg-red-500  hover:bg-red-600"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>

                {showToast && (
                  <div className="w-56 bg-red-400 fixed top-32 right-4 p-2 rounded font-serif">
                    Item removed from the cart!!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
