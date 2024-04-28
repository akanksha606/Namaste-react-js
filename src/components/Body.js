import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockdata.js";
import { useEffect, useState } from "react";

const Body = () => {
    //local state variable
 const [listOfResState, setListOfResState] = useState([])
 console.log("Body Rendered");
 useEffect(()=>{
    fetchData();
 },[]);

 const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json(); //convert the data stream to json
    console.log(json);
    setListOfResState(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 };

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
    {listOfResState.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
    {/* {listOfResState.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resdata={restaurant}/>))} */}
    </div>
    </div>
    )

}
export default Body;