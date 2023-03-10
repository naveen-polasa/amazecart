import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center md:justify-around lg:justify-around  gap-x-8 gap-y-5">
        {products.map((product) => {
          return <Product key={product.id} {...product}></Product>;
        })}
      </div>
    </section>
  );
};
export default GridView;
