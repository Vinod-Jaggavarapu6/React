import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  console.log(listOfRestaurants);

  const filterTopRatedRestaurants = () => {
    setResList(
      listOfRestaurants?.filter(
        (restaurant) => restaurant?.info?.avgRating >= 4
      )
    );
  };

  const filterRestaurants = (searchQuery) => {
    setResList(
      listOfRestaurants?.filter((restaurant) =>
        restaurant?.info?.name
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase())
      )
    );
  };

  useEffect(() => {
    console.log("useEffect hook");
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168"
    );
    const data = await res.json();
    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(listOfRestaurants);

    setResList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (resList?.length == 0) {
  //   return <Shimmer />;
  // }
  return resList?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <Search onSearch={filterRestaurants} />
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
