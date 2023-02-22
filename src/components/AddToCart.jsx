import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmt) => {
      let tempAmt = oldAmt + 1;
      if (tempAmt > stock) {
        return stock;
      }
      return tempAmt;
    });
  };
  const decrease = () => {
    setAmount((oldAmt) => {
      let tempAmt = oldAmt - 1;
      if (tempAmt < 1) {
        return 1;
      }
      return tempAmt;
    });
  };
  return (
    <section>
      <div className="flex gap-x-5">
        <span className="font-semibold">Colors : </span>
        <span className="flex gap-x-3 items-center">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`{
                w-4 h-4 rounded-full ${
                  mainColor === color
                    ? "opacity-100 border-2 border-red-300 scale-125"
                    : "opacity-50"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? (
                  <FaCheck size="12px" className="text-white" />
                ) : null}
              </button>
            );
          })}
        </span>
      </div>
      <div className="py-3 flex flex-col gap-2">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" >
          <button
            type="submit"
            className="py-1.5 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl"
            onClick={() => addToCart(id, mainColor, amount, product)}
          >
            Add To Cart
          </button>
        </Link>
      </div>
    </section>
  );
};
export default AddToCart;
