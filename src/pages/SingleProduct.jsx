import { useEffect } from "react";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
import {
  AddToCart,
  Error,
  Loading,
  PageHero,
  ProductImages,
  Stars,
} from "../components";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";

const SingleProduct = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  const backToHome = () => {
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <>
        <Error />
        <div className="text-center pb-12">
          <button
            className="py-2 px-6 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl text-center"
            onClick={backToHome}
          >
            Back To Home
          </button>
        </div>
      </>
    );
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: product_id,
    company,
    images,
  } = product;

  return (
    <section>
      <div className="bg-red-200">
        <PageHero title={name} product />
      </div>
      <div className="max-w-7xl mx-auto">
        <Link to="/products">
          <button className="py-2 px-6 mx-5 mt-4 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl">
            Back To Products
          </button>
        </Link>
        <div className="px-5 py-4 lg:flex">
          <ProductImages images={images} />
          <div className="md:w-[48%] md:mx-auto">
            <h2 className="text-xl capitalize font-semibold py-2">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="text-red-700 font-semibold py-2">
              {formatPrice(price)}
            </h5>
            <p className="py-2 lg:opacity-75">{description}</p>
            <div className="flex flex-col gap-y-3 py-2 ">
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Available :
                </span>
                {stock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  SKU :
                </span>
                {product_id}
              </p>
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Brand :
                </span>
                {company}
              </p>
            </div>
            <hr />
            {stock && <AddToCart />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
