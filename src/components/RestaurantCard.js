import { CDN_URL } from "../utils/constants.js";
const RestaurantCard = (props) => {
    const {resdata} =props;
    const {
            name,
            cuisines,
            cloudinaryImageId,
            avgRating,

    } = resdata?.info;
    return(
            <div className="res-card">
                    <img className="res-img" alt="res-img" src={CDN_URL + cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{avgRating} stars</h4>
                    <h4>36 mins</h4>
            </div>
    )
}
export default RestaurantCard;