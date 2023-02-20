import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <div className="h-28 flex items-center max-w-7xl mx-auto ">
      <h3 className="text-2xl font-semibold capitalize px-5 py-3 text-red-900 ">
        <Link to="/">Home</Link>
        {product && <Link to="/products"> / Products</Link>} / {title}
      </h3>
    </div>
  );
};
export default PageHero;
