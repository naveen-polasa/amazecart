import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <div className="w-[95%] sm:w-96 text-center border p-4 rounded-xl mx-auto">
      <article className=" flex flex-col gap-3 ">
        <div className="flex justify-between">
          <h5 className="font-semibold text-xl">Subtotal :</h5>
          <span>{formatPrice(total_amount)}</span>
        </div>
        <div className="flex justify-between">
          <p className="font-light">Shipping fee :</p>
          <span>{formatPrice(shipping_fee)}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <h4 className="font-semibold text-xl">Order Total :</h4>
          <span>{formatPrice(total_amount + shipping_fee)}</span>
        </div>
      </article>
      {myUser ? (
        <Link to="/checkout">
          <button className="py-2 px-2 my-5 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Proceed To Checkout
          </button>
        </Link>
      ) : (
        <button
          className="py-2 px-4 my-5 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl"
          onClick={loginWithRedirect}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default CartTotals;
