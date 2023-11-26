import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockdata.js";

let listOfRes = [{
    "info": {
    "id": "5931",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    }
    }, 
    {
        "info": {
        "id": "5932",
        "name": "KFC",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 3.8,
        }
        },
        {
            "info": {
            "id": "5933",
            "name": "Mc Donalds",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Burgers",
            "American"
            ],
            "avgRating": 3.5,
            }
            }]
const Body = () => {
    return(
            <div className="body">
    <button className="filter-btn" onClick={()=>{
        //filter logic
        listOfRes = listOfRes.filter((res)=> res.info.avgRating > 4);
        console.log(listOfRes);
    }}>
        Top rated restaurant
    </button>
    <div className="res-container">
    {listOfRes.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resdata={restaurant}/>))}
    </div>
    </div>
    )

}
export default Body;