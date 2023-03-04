import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <div className="flex gap-x-6 items-center">
      <Link
        to="/cart"
        className="flex gap-2 items-center  font-semibold "
        onClick={closeSidebar}
      >
        <span className="text-xl"> Cart </span>
        <span className="relative">
          <FaShoppingCart size="24px" />
          <span className="absolute -top-3 -right-3 bg-yellow-400 rounded-full px-1">
            {total_items}
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          className="flex gap-2 items-center font-semibold"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <span className="text-xl">Logout</span>
          <FaUserMinus size="24px" />
        </button>
      ) : (
        <button
          className="flex gap-2 items-center font-semibold"
          onClick={loginWithRedirect}
        >
          <span className="text-xl">Login</span>
          <FaUserPlus size="24px" />
        </button>
      ) }
    </div>
  );
};
export default CartButtons;
