import { useEffect,useState } from "react";
import resData  from "../utils/mockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { REST_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{
   // const[resInfo,setResInfo]= useState(null)

    const {resId}=useParams()
   const resInfo=useRestaurantMenu(resId);

    //const{name,cuisines,costForTwo}=resData[0]?.info;
    const fltr=resData.filter((e)=>e.info.id===resId);//static 

    // useEffect(()=>{
    // fetchData();

    // //setResInfo(fltr)//static
    // },[])


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

    return(
        <div className="resinfo">
         
          <h1>{name}</h1>
          <h6>{locality},{areaName}</h6>
          <p>Cuisines : {cuisines.join(", ")} - {costForTwoMessage}</p>
          {/* <p>{cuisines.map((e)=><li>{e}</li>)}</p> */}
          <h2>Menu</h2>
          <p>{itemCards.map((e)=><li>{e.card.info.name}</li>)}</p>
          <h2>items</h2>
        </div>
    )
      
}


export default RestaurantMenu;