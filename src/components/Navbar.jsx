import { FaBars } from "react-icons/fa";
import logo from "../assets/AmazeCart1.png";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <nav className="py-3 h-20">
      <div className="flex justify-between px-5 max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        <button className="md:hidden" onClick={openSidebar}>
          <FaBars size="28px" />
        </button>
        <ul className="hidden md:flex items-center gap-x-12 capitalize px-6 text-xl">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="hover:scale-105 hover:border-b-2 border-red-400">
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:inline-flex ">
          <CartButtons />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
