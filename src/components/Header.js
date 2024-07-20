import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOffline from "../utils/useOffline";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  useEffect(() => {
    console.log("useeffect is called");
  }, []);
  const status = useOffline();
  //subscribing to store using selector
  const cartItem = useSelector((stores) => stores.cart.items);
  console.log(cartItem);

  const user = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg bg-white fixed w-full z-30 top-0">
      <div className="w-[70px] ml-4 flex ">
        <Link to="/">
          <img className="" src={LOGO_URL}></img>
          <h3 className="text-orange-600 font-semibold font-mono text-base">
            FoodCraze
          </h3>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 ">
          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/">Home</Link>
          </li>

          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/cart">
              <div className="flex gap-1 ">
                Cart
                <div className="border rounded-full bg-green-500 hover:bg-orange-500 text-stone-50 h-5 w-5 mt-1 text-center text-xs font-bold">
                  {" "}
                  {cartItem.length}
                </div>
              </div>
            </Link>
          </li>
          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/contact">Contact</Link>
          </li>
          {/* 
          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
          {user.LoggedInUser}
          </li> */}

          <li className="mx-3 font-medium">Status :{status ? "🟢" : "🔴"}</li>
          {/* <li className="mx-3 font-medium hover:text-orange-500"><Link to="/grocery">Grocery</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
