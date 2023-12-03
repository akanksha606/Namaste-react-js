import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockdata.js";
import { useState } from "react";

const Body = () => {
    //local state variable
 const [listOfResState, setListOfResState] = useState(resList)
    return(
            <div className="body">
    <button className="filter-btn" onClick={()=>{
        //filter logic
        const filteredList = listOfResState.filter((res)=> res.info.avgRating > 4);
        setListOfResState(filteredList);
    }}>
        Top rated restaurant
    </button>
    <div className="res-container">
    {listOfResState.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resdata={restaurant}/>))}
    </div>
    </div>
    )

}
export default Body;