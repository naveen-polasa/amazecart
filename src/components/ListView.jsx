import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const ListView = ({ products }) => {
  return (
    <section>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id} className="md:flex gap-6 my-4 items-center max-w-5xl">
            <img
              src={image}
              alt={name}
              className="w-72 h-64 rounded-xl border-2 shrink-0 border-slate-300"
            />
            <div className="flex flex-col gap-y-2">
              <h4 className="text-lg font-semibold capitalize">{name}</h4>
              <h5 className="font-mono text-red-400 text-lg">
                {formatPrice(price)}
              </h5>
              <p className="lg:opacity-75">{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`}>
                <button className="py-1.5 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl">
                  Details
                </button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default ListView;
