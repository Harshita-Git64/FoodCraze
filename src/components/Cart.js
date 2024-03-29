import { useDispatch, useSelector } from "react-redux";
import { ITEMS_IMG } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";
//import { ITEMS_IMG } from "../utils/constants";

const Cart = () => {
  const cartItem = useSelector((stores) => stores.cart.items);
  const dispatch = useDispatch();
  const clearAllCartItems = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (cartId) => {
    dispatch(removeItem(cartId));
  };
  console.log(cartItem);
  return (
    <div className="mt-8">
      {cartItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center ">
          <img
            className="w-64"
            src="https://media.istockphoto.com/id/1139666909/vector/shopping-cart-shop-trolley-or-basket-in-the-supermarket.jpg?s=612x612&w=0&k=20&c=_HajO7ifYKxuwzKFf-Fx9lsLKBa_1Rq9vuzGiPq8Q5Q="
          />
          <h1 className="text-center text-4xl">Your Cart is Empty!</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-semibold text-xl"> Cart Items</h1>
          <button
            className="p-2 font-bold text-white bg-black rounded-lg"
            onClick={clearAllCartItems}
          >
            Clear Cart{" "}
          </button>
          {/* <div className="border-[4px] border-rose-700 p-3 m-auto w-6/12" > */}
          {cartItem.map((e) => (
            <div className="flex justify-between py-5 border-gray-500 border-b-2">
              <div className="items-center">
                <span className="font-black">{e?.card?.info?.name}</span>
                <span> - ₹ {e?.card?.info?.price}</span>
              </div>
              <div className="items-end justify-center flex flex-col">
                {ITEMS_IMG + e.card.info.imageId && (
                  <img
                    className="w-28 h-24 rounded-lg"
                    src={ITEMS_IMG + e.card.info.imageId}
                    alt="img"
                  ></img>
                )}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3649/3649581.png"
                  className="h-10 hover:cursor-pointer"
                  onClick={
                     () => handleRemoveItem(e.card.info.id)
                   
                    // const remitem= cartItem.filter((rem)=>rem.card.info.id!=e.card.info.id)
                    // console.log(remitem)
                  }
                ></img>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* </div> */}
    </div>
  );
};

export default Cart;
