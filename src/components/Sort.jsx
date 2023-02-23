import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <section className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-x-2 ml-4 my-5">
        <button type="button" onClick={setGridView}>
          <BsFillGridFill
            size="28px"
            className={`p-0.5 border-black border-2 rounded-md ${
              grid_view && "bg-red-200 scale-105"
            }`}
          />
        </button>
        <button type="button" onClick={setListView}>
          <BsList
            size="27px"
            className={`border-black border-2 rounded-md ${
              !grid_view && "bg-red-200 scale-105"
            }`}
          />
        </button>
        <span className="ml-4 hidden md:flex">{products.length} Products Found</span>
      </div>
      <span className="border lg:w-80"></span>
      <div>
        <form>
          <label>Sort By : </label>
          <select name="sort" value={sort} onChange={updateSort}>
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Name (A - Z)</option>
            <option value="z-a">Name (Z - A)</option>
          </select>
        </form>
      </div>
    </section>
  );
};
export default Sort;
