import Cards, {Promotedrescards} from "./Cards";
import resData  from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOffline from "../utils/useOffline";
import { Link } from "react-router-dom";

const Body=()=>{
    // let ll={resData}
    const [resList,setList]=useState([]);
    const [filteredRest,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");

    const Promotedlabel=Promotedrescards(Cards)
    useEffect(()=>{
       //fetchData(); 
     setList(resData);
    setFilteredRestaurant(resData);
    },[]);

        const fetchData = async ()=>{
        const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=22.717&lng=75.8337")
        const jsondata=await data.json();
        //setList(resList);
        setFilteredRestaurant(jsondata?.data?.Cards);
        //console.log(jsondata);
    }
    //conditinal rendering: rendering on the basis of condition
    const onlineStatus=useOffline()
    if(onlineStatus===false){ 
        return(
            <div>
                <h1>You are offline!!</h1>
            </div>
        )
    }
    // if(resList.length ===0)
    // {
    //     return (<Shimmer />);
    //   // return <h1>loading....</h1>;
    // }
    return resList.length ===0?<Shimmer/>:(
        <div className="body">
            <div className="flex justify-between p-5"> 
           <button className="bg-gray-300 px-3 rounded-lg" onClick={()=>{
             const list=resList.filter((restaurant)=>restaurant.info.avgRating>4);
            //  <div className="rest-container">
            //     {<Cards  resObj={resData}/>}
            //  </div>
            setFilteredRestaurant(list)
             }}>Top Rated Restaurant</button>
             
             <div className="">
             <input type="text" className="border border-solid border-black focus: ring-blue-500" placeholder="Search Restaurants" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
             <button className="ml-3 bg-green-500 px-3 border border-solid border-green-200 rounded-lg" onClick={()=>{
                
                const searchlist=resList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurant(searchlist)
            //      if(searchlist){
            //        setFilteredRestaurant(searchlist)
            //        console.log(searchlist.length)
            //      }
            //     else{
            //    console.log("no list")
            //     }
              
             }}>Search</button>
             </div>
             </div>
           
            <div className="rest-container flex flex-wrap justify-center ">
            {/* { <Cards resObj={resData[0]}/>
            <Cards resObj={resData[1]}/>
            <Cards resObj={resData[2]}/>
            <Cards resObj={resData[3]}/>
            <Cards resObj={resData[4]}/>
            <Cards resObj={resData[5]}/>
            <Cards resObj={resData[6]}/>
            <Cards resObj={resData[7]}/>
            <Cards resObj={resData[8]}/> } */}
{
    filteredRest.map((restaurant)=>(<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
       { restaurant.info.promoted ||restaurant.info.aggregatedDiscountInfoV2 ? <Promotedlabel resObj={restaurant}/>: <Cards resObj={restaurant}/>}</Link>))
       
}
            
            </div>
        </div>
    )
}

export default Body;