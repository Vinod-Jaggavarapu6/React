import { RESTAURANT_IMG_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card.info?.id}
          className="my-2 p-2 py-6 border-gray-300 border-b-2 text-left flex justify-between gap-2"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold text-gray-700">
                {item?.card.info?.name} -
              </span>
              <span className="m-2">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              {item?.card.info?.description}
            </p>
          </div>
          <div className="relative w-3/12">
            <img
              src={RESTAURANT_IMG_BASE_URL + item?.card.info?.imageId}
              alt={item?.card.info?.name}
              className="fixed-size-food-item-img"
            />
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-2 bg-white text-green-500 font-bold text-sm shadow-lg rounded-md"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
