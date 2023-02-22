import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { useCartContext } from "../context/cart_context";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="text-center py-4">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link to="/products">
          <button className="py-2 px-6 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }
  return (
    <main>
      <div className="bg-red-200">
        <PageHero title="cart" />
      </div>
      <div>
        <CartContent/>
      </div>
    </main>
  );
};
export default Cart;
