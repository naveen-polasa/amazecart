import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h3 className="text-center text-2xl">
        Sorry, no products matched your search...
      </h3>
    );
  }
  if (!grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};
export default ProductList;
