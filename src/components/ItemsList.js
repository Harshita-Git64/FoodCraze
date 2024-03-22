import { ITEMS_IMG } from "../utils/constants";

const ItemsList=({item})=>{
    
    console.log(item?.itemCards)
    
//         itemxy?.itemCards.map((e)=>{
//    console.log(e.card.info.name)
//         })
    const ar=[1,3,5]
    //console.log(ar)
    // list?.data?.itemCards.map((e)=>{
    //     console.log(e)
    // })
    return(
        <div>
          
           <p >{ item?.itemCards.map((e)=>
                <div className="">
                    <div className="flex justify-between py-5 border-gray-500 border-b-2" >
                    <div className="items-center flex">
                    <span className="font-black">{e?.card?.info?.name }</span>
                    <span> - ₹ {e?.card?.info?.price}</span>
                    </div>

                   <div className="items-end justify-center flex">
                   
                   <button className="border-green-600 border text-green-500 font-semibold  absolute mt-5 bg-white p-1 px-5 rounded-xl">Add</button>
                    { ITEMS_IMG+e.card.info.imageId && <img className="w-28 h-24 rounded-lg" src={ ITEMS_IMG+e.card.info.imageId} alt="img"></img>}

                    
                   
                   </div>
                    </div>

                  
                </div>
                )}</p>
           
        </div>
    )
}
export default ItemsList;