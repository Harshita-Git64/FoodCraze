import {CARDS_IMG} from "../utils/constants";
const Cards=(props)=>{
    
    const {resObj} = props;
    const {name,areaName,cloudinaryImageId,avgRating,aggregatedDiscountInfoV3}=resObj?.info
    return(
        <div className="m-3 w-[240px] h-[320px] p-1 rounded-lg border hover:shadow-xl  hover:bg-gray-300">
             <h1 className="mt-[150] absolute font-bold text-orange-500 text-end">{aggregatedDiscountInfoV3?.header}  {aggregatedDiscountInfoV3?.subHeader}</h1>
            <img className="w-[240px] h-[180px] rounded-lg border-stone-700"  src={CARDS_IMG + cloudinaryImageId}></img>
           
            <h2 className="font-bold py-2 pl-1">{name}</h2>
            <h4 className="pl-1">{areaName}</h4>
            <h5 className="pl-1">{avgRating}</h5>

        </div>
    )
    }

export const Promotedrescards=(Cards)=>{
    return (props)=>{
        
        return(
        <div>
           <span className="p-1 bg-yellow-300 text-white rounded-lg absolute">Promoted</span>
          
            <Cards {...props}/>
            <span className=" bg-yellow-300 text-white rounded-lg"></span>   
        </div>
        )
    }
}
export default Cards;