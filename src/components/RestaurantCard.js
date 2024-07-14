import { RESTAURANT_IMG_BASE_URL } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } =
    restaurant;
  const deliveryTime = restaurant.sla.deliveryTime;
  return (
    <div className="res-card">
      <img
        src={RESTAURANT_IMG_BASE_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
