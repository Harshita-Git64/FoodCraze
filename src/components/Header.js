import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"; // way to import for named exports
import useOffline from "../utils/useOffline";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { GoHeartFill } from "react-icons/go";

const Header = () => {
  useEffect(() => {
    console.log("useeffect is called");
  }, []);
  const status = useOffline();
  //subscribing to store using selector
  const cartItem = useSelector((stores) => stores.cart.items);
  console.log(cartItem);
  return (
    <div className="flex justify-between shadow-lg bg-white fixed w-full z-30 top-0">
      <div className="w-[100px]">
        <img className="" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 ">
          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/contact">Contact</Link>
          </li> */}
          <li className="mx-3 font-medium hover:text-orange-500 transition-all">
            <Link to="/cart">Cart[{cartItem.length}]</Link>
          </li>
          <li className="mx-3 text-red-500 hover:scale-110 text-2xl transition-all">
            <Link to="/favourite" title="Favourite">
              <GoHeartFill />
            </Link>
          </li>
          <li className="mx-3 ">Status :{status ? "🟢" : "🔴"}</li>
          {/* <li className="mx-3 font-medium hover:text-orange-500"><Link to="/grocery">Grocery</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
