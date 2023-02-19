import logo from "../assets/AmazeCart1.png";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <div className={`${isSidebarOpen ? "flex" : "hidden"}`}>
      <aside className=" absolute top-0 left-0 bg-white ">
        <div className="flex justify-between w-screen  px-5  items-center py-3">
          <img src={logo} alt="logo" className="w-32" />
          <button onClick={closeSidebar}>
            <FaTimes size="33px" className="text-red-600" />
          </button>
        </div>
        <ul className="flex flex-col gap-y-6 capitalize text-xl px-6 pt-3">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li
                key={id}
                className="hover:translate-x-1 hover:underline underline-offset-4 duration-300 "
                onClick={closeSidebar}
              >
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li
            className="hover:translate-x-1 hover:underline underline-offset-4 duration-300 "
            onClick={closeSidebar}
          >
            <Link to="./checkout">checkout</Link>
          </li>
        </ul>
        <div className="py-9 flex justify-center">
          <CartButtons />
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
