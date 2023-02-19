import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[calc(100vh-10rem)] bg-red-200 flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold p-5">404</h2>
      <h3 className="text-xl font-semibold p-5">Sorry, the page you tried cannot be found.. </h3>
      <Link to="/">
        <button className="py-3 px-7 m-3 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">Back to Home</button>
      </Link>
    </div>
  );
};
export default ErrorPage;
