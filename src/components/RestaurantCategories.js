import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategories=(props)=>{
   // console.log(props?.data?.title)
   const[showItems,SetShowItems]=useState(false)
   function ShowItemLists(){
   
    if(!showItems){
        console.log("close")
        SetShowItems(true)
    }
    else{
        console.log("open")
        SetShowItems(false)
    }
   // SetShowItems(!showItems);
   }
    return(
        <div>
           
            <div className="bg-gray-200 my-4 mx-64 shadow-xl px-2 py-1 items-center" >
                <div className="flex justify-between  hover:cursor-pointer bg-gray-300" onClick={()=>ShowItemLists()}>
                <span className="font-bold text-2xl">{props?.data?.title} ({props?.data?.itemCards.length})</span>
                <span > {showItems?"🔼":"🔽"}</span>
                </div>

                {showItems && <ItemsList item={props?.data}/>}
            </div>
           
           
        </div>
    )
}
export default RestaurantCategories;