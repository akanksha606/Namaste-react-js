import React from "react";
import ReactDOM from "react-dom";
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
const Header = () => {
        return(
                <div className="Header">
                        <div className="logo">
                                <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"/>
                        </div>
                        <div className="nav-items">
                                <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Cart</li>
                                </ul>
                        </div>

                </div>
        )
}

const RestaurantCard = () => {
        return(
                <div className="res-card">
                        <img className="res-img" alt="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"/>
                        <h3>Maghana Foods</h3>
                        <h4>North indian, biriyani</h4>
                        <h4>4.4 stars</h4>
                        <h4>36 mins</h4>
                </div>
        )
}
const Body = () => {
        return(
                <div className="body">
        <div className="search-bar">
                Search
        </div>
        <div className="res-container"><RestaurantCard/></div>
        </div>
        )

 }
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