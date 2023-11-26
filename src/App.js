import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
  /**
   * App structure
   Header
   -Logo
   -name
   -nav items
   Body
   -search 
   -card container> restaurant cards > img, name of res, star rating, cuisines etc., delivery time

   Footer
   -copyright
   -disclaimer
   -company info
   */      

//React functional component
const resObj = {
        "info": {
        "id": "5938",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Tasker Town",
        "areaName": "Shivaji Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "5938",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 4400
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 4400
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-15 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
        "type": "WEBLINK"
        }
        };

const AppLayout = () =>{
        return(
                <div className="app">
                        <Header/>
                        <Body/>
                </div>
        )
}
// can write like this also
const HeadingComponent1 = ()=> <h1>Namaste functional component</h1>
//How to render func. component
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);