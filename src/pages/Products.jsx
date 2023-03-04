import { Filters, PageHero, ProductList, Sort } from "../components";

const Products = () => {
  return (
    <section>
      <div className="bg-red-200">
        <PageHero title="products" />
      </div>
      <div className="md:flex px-3 justify-between max-w-7xl mx-auto">
        <div>
          <Filters />
        </div>
        <div className="md:w-[98%] mx-auto">
          <Sort />
          <ProductList />
        </div>
      </div>
    </section>
  );
};
export default Products;
