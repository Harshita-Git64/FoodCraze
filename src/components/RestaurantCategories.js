import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategories=({data,showItems,SetShowIndex})=>{
   // console.log(props?.data?.title)
  
   function ShowItemLists(){
   
    SetShowIndex();
    //SetShowItems(!showItems)
   // console.log(showItems);
   
   }
    return(
        <div>
            <div className="bg-gray-200 my-4 mx-64 shadow-xl px-2 py-1 items-center" >
                <div className="flex justify-between  hover:cursor-pointer bg-gray-300" onClick={()=>ShowItemLists()}>
                <span className="font-bold text-2xl">{data.title} ({data.itemCards.length})</span>
                <span > {showItems?"🔼":"🔽"}</span>
                </div>

                {showItems && <ItemsList item={data}/>}
            </div>
           
           
        </div>
    )
}
export default RestaurantCategories;