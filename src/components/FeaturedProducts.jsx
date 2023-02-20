import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className="bg-green-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="font-bold text-3xl text-center pb-6">
          Featured Products
        </h2>
        <div className="flex flex-wrap justify-around gap-x-3  gap-y-10 my-8">
          {featured.slice(0,3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
