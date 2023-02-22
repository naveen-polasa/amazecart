import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "increase");
  };
  const decrease = () => {
    toggleAmount(id, "decrease");
  };
  return (
    <div className="flex items-center justify-between md:justify-around px-5 py-2 my-3 mx-9 border rounded-xl">
      <div className="flex gap-x-4 m-3 items-center w-64 ">
        <img src={image} alt={name} className="rounded-xl w-16 h-16" />
        <div>
          <h5 className="capitalize font-semibold">{name}</h5>
          <div className="flex items-center py-2 gap-x-2">
            <p>Color : </p>
            <div
              style={{ background: color }}
              className="w-4 h-4 rounded-full inline-block"
            ></div>
          </div>
          <h5 className="font-semibold"> {formatPrice(price)}</h5>
        </div>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="font-semibold hidden md:flex">
        {formatPrice(price * amount)}
      </h5>
      <button
        className="text-red-600 hidden sm:flex"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default CartItem;
