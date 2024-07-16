import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  const dummy = "dummydata";

  const resInfo = useRestaurantMenu(id);

  const [showCategoryIndex, setShowCategoryIndex] = useState(0);

  const handleCategoryClick = (index) => {
    if (showCategoryIndex === index) {
      setShowCategoryIndex(-1);
    } else {
      setShowCategoryIndex(index);
    }
  };

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const response = await fetch(`${RESTAURANT_MENU_API}=${id}`);

  //   const data = await response.json();

  //   setResInfo(data?.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c?.card?.card?.["@type"].includes("ItemCategory")
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>

      <h3 className="font-bold text-gray-700 my-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => {
        return (
          <ResCategory
            key={category?.card?.card?.title}
            category={category?.card?.card}
            showItemList={index == showCategoryIndex ? true : false}
            handleCategoryClick={() => handleCategoryClick(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
