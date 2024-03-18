import {CARDS_IMG} from "../utils/constants";
const Cards=(props)=>{
    
    const {resObj} = props;
    const {name,areaName,cloudinaryImageId,avgRating}=resObj?.info
    return(
        <div className="cards">
            <img className="card-img" src={CARDS_IMG + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h5>{avgRating}</h5>

        </div>
    )
}

export default Cards;