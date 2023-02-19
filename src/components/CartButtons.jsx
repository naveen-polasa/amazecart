import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
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
            12
          </span>
        </span>
      </Link>
      <button className="flex gap-2 items-center font-semibold">
        <span className="text-xl">Login</span>
        <FaUserPlus size="24px" />
      </button>
    </div>
  );
};
export default CartButtons;
