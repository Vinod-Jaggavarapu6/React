import ItemList from "./ItemList";
import { useState } from "react";

const ResCategory = ({ category, showItemList, handleCategoryClick }) => {
  const { title, itemCards: items } = category;
  // const handleClick = () => {
  //   console.log("clicked");
  //   setShowItemList(!showItemList);
  // };
  // const [showItemList, setShowItemList] = useState(false);
  const handleClick = () => {
    handleCategoryClick();
  };

  return (
    <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="font-bold text-lg text-gray-750 flex justify-between mb-4 cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {title} ({items?.length})
        </span>
        <span>{!showItemList ? "⬇️" : "⬆️"}</span>
      </div>
      {showItemList ? <ItemList items={items} /> : null}
    </div>
  );
};

export default ResCategory;
