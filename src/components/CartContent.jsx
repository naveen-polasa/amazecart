import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div className="px-5 max-w-7xl mx-auto">
      <CartColumns />
      <hr />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="flex justify-between mx-6">
        <Link to="/products">
          <button className="py-2 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Continue Shopping
          </button>
        </Link>
        <button
          type="button"
          onClick={clearCart}
          className="py-2 px-4 my-2 text-lg border border-red-500 hover:scale-105 duration-300 text-white bg-red-400 rounded-2xl"
        >
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};
export default CartContent;
