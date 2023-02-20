import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex gap-5 items-center">
      <div
        className="text-yellow-500 my-2 flex gap-x-2">
        {tempStars}
      </div>
      <div>
        <p>({reviews} customer reviews)</p>
      </div>
    </div>
  );
};
export default Stars;
