import { useEffect,useState } from "react";
import resData  from "../utils/mockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { REST_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu=()=>{
   // const[resInfo,setResInfo]= useState(null)

    const {resId}=useParams()
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,SetShowIndex]=useState(0)
    //const{name,cuisines,costForTwo}=resData[0]?.info;
    const fltr=resData.filter((e)=>e.info.id===resId);//static 

    // useEffect(()=>{
    // fetchData();

    // //setResInfo(fltr)//static
    // },[])+


   // 
    // const fetchData= async ()=>{
    //     const data= await fetch(REST_MENU+resId)
    //     const jsondata=await data.json();
    //     console.log(jsondata.data)
        
    //     setResInfo(jsondata.data)
    // }
   
   // const {name,cuisines,costForTwo}=fltr[0]?.info;
     
   // console.log(resInfo?.cards[2]?.card?.card?.info)
    if(resInfo===null){
        return (<Shimmer />);
    }
   // console.log(resInfo?.cards[2]?.card?.card?.info.name)
   const {name,cuisines,costForTwoMessage,areaName,locality}= resInfo?.cards[2]?.card?.card?.info;
   const {itemCards}= resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   const filteredcategory=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>e?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log("-----")
   
   console.log(filteredcategory)
   const category=filteredcategory.map((e)=>{
    e?.card?.card?.title
    })
  // console.log(category)

 
 
    return(
        <div className="p-5 text-center">
          <b>{name}</b>
          <h6>{locality},{areaName}</h6>
          <p>Cuisines : {cuisines.join(", ")} - {costForTwoMessage}</p> 
          {/* <p>{cuisines.map((e)=><li>{e}</li>)}</p> */}
          <h2>Menu</h2>
          {/* <p>{itemCards.map((e)=><li>{e.card.info.name}</li>)}</p> */}
          <h2 className="font-semibold py-4">Categories</h2>
         
          <p>{filteredcategory.map((e,index)=> <RestaurantCategories 
          data={e?.card?.card} 
          key={e?.card?.card.title} 
          showItems={index===showIndex?true:false}
          SetShowIndex={()=>SetShowIndex(index)}
          />)}</p>
        </div>
    )
      
}


export default RestaurantMenu;