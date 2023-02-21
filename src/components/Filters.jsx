import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <section>
      <div className="pt-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              name="text"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
              className="h-10 rounded-lg border px-2"
            />
          </div>
          <div className="py-3">
            <h4 className="text-xl font-semibold py-1">Category</h4>
            <div className="flex flex-col items-start ">
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={`capitalize py-1 text-slate-600 ${
                      category === c.toLowerCase() &&
                      " border-b-2 border-red-300 "
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="py-3">
            <h4 className="text-xl font-semibold py-1">Company</h4>
            <select
              className="flex flex-col items-start capitalize "
              name="company"
              value={company}
              onChange={updateFilters}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} className=" py-1 text-slate-600">
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="py-3">
            <h4 className="text-xl font-semibold py-1">Colors :</h4>
            <div className="flex gap-x-2 py-1 items-center">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" && "border-b-2 border-red-300"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    style={{ background: c }}
                    name="color"
                    data-color={c}
                    className={`{
                w-4 h-4 rounded-full ${
                  color === c
                    ? "opacity-100 border-2 border-red-300 scale-125"
                    : "opacity-50"
                }`}
                    onClick={updateFilters}
                  >
                    {color === c ? (
                      <FaCheck size="12px" className="text-white" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="py-3">
            <h4 className="text-xl font-semibold py-1">Price</h4>
            <h4>{price > 1 && formatPrice(price)}</h4>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          <div className="py-3 flex items-center justify-between">
            <label htmlFor="shipping" className="text-xl font-semibold">
              Free Shipping
            </label>
            <span className="mt-2 scale-125 mr-8 ">
              <input
                type="checkbox"
                name="shipping"
                checked={shipping}
                onChange={updateFilters}
              />
            </span>
          </div>
        </form>
        <div className="py-3">
          <button
            className="py-1.5 px-4 my-2 text-lg border border-red-600 hover:scale-105 duration-300 text-white bg-red-500 rounded-xl"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
};
export default Filters;
