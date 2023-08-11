import { AiFillApple } from "react-icons/ai";

const AppleButton = () => {
  return (
    <div className="flex items-center w-full py-4 bg-black divide-x divide-white cursor-pointer select-none rounded-xl divide-dashed">
      <div className="px-6 text-3xl text-white">
        <AiFillApple />
      </div>
      <div className="flex flex-col gap-2 px-6 text-white leading-0">
        <p className="text-xs">Download on the</p>
        <p className="text-sm">Apple Store</p>
      </div>
    </div>
  );
};

export default AppleButton;
