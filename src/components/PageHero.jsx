import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <div className="h-36 flex items-center max-w-7xl mx-auto ">
      <h3 className="text-2xl font-semibold capitalize px-5 py-3 text-red-900 ">
        <Link to="/">Home</Link> / {title}
      </h3>
    </div>
  );
};
export default PageHero;
