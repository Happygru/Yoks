import { FiArrowRight } from "react-icons/fi";

const ShareCard = ({ image, title, text }) => {
  return (
    <div className="max-w-[400px] w-full rounded-lg overflow-hidden shadow-md">
      <img src={image} alt="" className="w-full" />
      <div className="w-full p-4 flex flex-col gap-4">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-base">{text}</p>
        <button className="px-4 py-2 rounded-full bg-[#39c0c3] w-max text-white flex items-center gap-2 text-sm">
          <span className=" uppercase">get Started</span>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ShareCard;
