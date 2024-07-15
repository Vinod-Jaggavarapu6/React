import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useBody from "../utils/useBody";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const [resList, setResList] = useState([]);
  // const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const resList = useBody();
  const listOfRestaurants = useBody();

  const onlineStatus = useOnlineStatus();

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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch(
  //     "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168"
  //   );
  //   const data = await res.json();
  //   setListOfRestaurants(
  //     data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );

  //   setResList(
  //     data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  // if (resList?.length == 0) {
  //   return <Shimmer />;
  // }

  if (onlineStatus === false) {
    return (
      <div className="body-container">
        <h1 className="offline">
          You are offline. please check your internet connection
        </h1>
      </div>
    );
  }

  return resList?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex justify-between items-center mx-4">
        <Search onSearch={filterRestaurants} />
        <div className="filter mx-4">
          <button
            className="px-4 p-2 bg-gray-300 rounded-lg"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {resList.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
