import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";// way to import for named exports
import useOffline from "../utils/useOffline";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginbtn,SetLoginBtn]=useState("Login");
    const [onbtn,SetONBtn]=useState("ON");
    useEffect(()=>{
        console.log("useeffect is called1")
    },[])
    const status =useOffline();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="list">
                   <li>Status :{status?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button onClick={()=>{
                    loginbtn=="Login"?SetLoginBtn("Logout"):SetLoginBtn("Login");
                    }}>{loginbtn}</button> 

                    <button onClick={()=>{
                    onbtn=="ON"?SetONBtn("OFF"):SetONBtn("ON");
                    }}>{onbtn}</button> 
                </ul>
               
            </div>
           
        </div>
    )
    } 

export default Header;    