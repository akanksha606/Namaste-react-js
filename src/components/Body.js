import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockdata.js";
import { useState } from "react";

const Body = () => {
    //local state variable
 const [listOfResState, setListOfResState] = useState([{
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
            }]);
//normal js variable
let listOfResJS = [{
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