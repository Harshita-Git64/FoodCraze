import ItemsList from "./ItemsList";

const RestaurantCategories=(props)=>{
   // console.log(props?.data?.title)
    return(
        <div>
           
            <div className="bg-gray-300 my-4 mx-auto shadow-xl px-5 py-1 items-center hover:cursor-pointer" onClick={()=>{
               
                
            }}>
                <div className="flex justify-between">
                <span className="font-bold text-2xl">{props?.data?.title} ({props?.data?.itemCards.length})</span>
                <span >🔽</span>
                </div>

                <div> <ItemsList item={props?.data}/></div>
            </div>
           
           
        </div>
    )
}
export default RestaurantCategories;