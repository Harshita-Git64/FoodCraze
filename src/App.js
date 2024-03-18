import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";


const reactelement=<h1>this is h1 tag</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(reactelement);

    // const resData={
    //     info:{
    //         name:"xyz",
    //         areaName:"kuch bhi maan lo"
    //     }
    // }
    
const Grocery=lazy(()=>import("./components/Grocery"));

const Appcontainer=()=>{
    
    return(
        
        <div className="app">
            <Header/>
            <Outlet/>
           
        </div>
    )
}    

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Appcontainer/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ]
    },
   
])

root.render(<RouterProvider router={approuter}/>)
