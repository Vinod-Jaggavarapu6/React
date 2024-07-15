import { RESTAURANT_IMG_BASE_URL } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } =
    restaurant;
  const deliveryTime = restaurant.sla.deliveryTime;
  return (
    <div className="m-4 p-2 w-[300px] h-[360px] bg-gray-100 hover:bg-gray-150 rounded-md">
      <img
        src={RESTAURANT_IMG_BASE_URL + cloudinaryImageId}
        alt="res-logo"
        className="w-full h-36 rounded-md object-cover"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-gray-600 py-2">
        {cuisines.length > 3
          ? cuisines.slice(0, 3).join(", ") + " ,..."
          : cuisines.join(", ")}
      </h4>
      <div className="flex items-center py-2">
        <h4 className="mr-4 ">{avgRating} Stars</h4>
        <h4 className="font-bold ">{deliveryTime} minutes</h4>
      </div>

      <h4 className="mb-4 text-lg font-semibold text-gray-700">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
