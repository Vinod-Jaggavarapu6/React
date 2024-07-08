import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restaurants from "./utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setResList] = useState([...restaurants]);

  const filterTopRatedRestaurants = () => {
    console.log("filter data");
    setResList(resList.filter((restaurant) => restaurant.info.avgRating >= 4));
  };
  return (
    <div className="body-container">
      {/* <Search /> */}
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant.info}
            key={restaurant.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
