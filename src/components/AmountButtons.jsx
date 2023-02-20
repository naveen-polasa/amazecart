import { FaMinus, FaPlus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="flex gap-x-4">
      <button type="button" onClick={decrease}><FaMinus/></button>
      <h2 className="text-2xl font-bold">{amount}</h2>
      <button type="button" onClick={increase}><FaPlus/></button>
    </div>
  );
};
export default AmountButtons;
