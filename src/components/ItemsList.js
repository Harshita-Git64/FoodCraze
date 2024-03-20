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
          
           <p>{ item?.itemCards.map((e)=><li>{e?.card?.info?.name}</li>)}</p>
        </div>
    )
}
export default ItemsList;