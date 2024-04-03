import { useState } from "react";
import ItemsList from "./ItemsList";
import { IoCaretUpSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";

const RestaurantCategories=({data,showItems,SetShowIndex})=>{
  
   function ShowItemLists(){
    SetShowIndex();
   }
    return(
        <div>
            <div className="my-4 mx-64 px-2 py-1 items-center" >
                <div className="flex justify-between hover:cursor-pointer items-center" onClick={()=>ShowItemLists()}>
                <span className="font-bold text-2xl">{data.title} ({data.itemCards.length})</span>
                <span > {showItems?<IoCaretUpSharp />:<FaSortDown />}</span>
                </div>
                {showItems && <ItemsList item={data}/>}
            </div>
        </div>
    )
}
export default RestaurantCategories;