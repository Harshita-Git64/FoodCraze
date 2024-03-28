import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";// way to import for named exports
import useOffline from "../utils/useOffline";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginbtn,SetLoginBtn]=useState("Login");
    const [onbtn,SetONBtn]=useState("ON");
    useEffect(()=>{
        console.log("useeffect is called1")
    },[])
    const status =useOffline();
    const{LoggedInUser}=useContext(UserContext)
    //subscribing to store using selector
    const cartItem=useSelector((stores)=>stores.cart.items)
    console.log(cartItem)
    return (
        <div className="flex justify-between shadow bg-orange-300">
            <div className="w-[100px]">
                <img className="" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 ">
                    <li className="mx-3 ">Status :{status?"🟢":"🔴"}</li>
                    <li className="mx-3 "><Link to="/">Home</Link></li>
                    <li className="mx-3 "><Link to="/about">AboutUs</Link></li>
                    <li className="mx-3 "><Link to="/contact">Contact</Link></li>
                    <li className="mx-3 "><Link to="/cart">Cart({cartItem.length})</Link></li>
                    <li className="mx-3 "><Link to="/grocery">Grocery</Link></li>
                    <button onClick={()=>{
                    loginbtn=="Login"?SetLoginBtn("Logout"):SetLoginBtn("Login");
                    }}>{loginbtn}</button> 

                    <button onClick={()=>{
                    onbtn=="ON"?SetONBtn("OFF"):SetONBtn("ON");
                    }}>{onbtn}</button> 
                    <li className="mx-3">{LoggedInUser}</li>
                </ul>
               
            </div>
           
        </div>
    )
    } 

export default Header;    