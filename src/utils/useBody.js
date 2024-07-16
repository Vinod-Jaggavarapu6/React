import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useBody = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_LIST_API);
    const data = await res.json();
    setResList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(resList);
  };

  return resList;
};

export default useBody;
