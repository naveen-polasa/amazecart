import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const {
    paginated: tempProducts,
    currPage,
    grid_view,
    setPage,
  } = useFilterContext();
  let products = tempProducts[currPage];
  if (!products || products.length < 1) {
    return (
      <h3 className="text-center text-2xl">
        Sorry, no products matched your search...
      </h3>
    );
  }
  return (
    <>
      {!grid_view ? (
        <ListView products={products} />
      ) : (
        <GridView products={products} />
      )}

      <div className="flex justify-center gap-x-3">
        {tempProducts.map((arr, index) => {
          return (
            <button
              key={index}
              className="py-2 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl"
              onClick={() => setPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
