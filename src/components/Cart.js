import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store?.cart?.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 w-6/12 m-auto">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Cart</h1>
        {cartItems.length ? (
          <button
            className="text-white bg-red-500 hover:bg-red-600 font-bold text-sm p-2 rounded-md"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        ) : null}
      </div>

      <div>
        {cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <h1 className="font-semibold text-lg p-4 m-10">Cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
