import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Counter({
  count = 0,
  setCount,
  min = 0,
  max = 999999999,
}) {
  const incrementCounter = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrementCounter = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center">
      <p
        onClick={decrementCounter}
        className="p-2 cursor-pointer bg-white border border-[#E5E5E5] rounded-full font-bold"
      >
        <FaMinus />
      </p>
      <p className="w-12 text-center">{count}</p>
      <p
        onClick={incrementCounter}
        className="p-2 cursor-pointer bg-[#F6F6F6] border border-[var(--text-color)] rounded-full font-bold"
      >
        <FaPlus />
      </p>
    </div>
  );
}
