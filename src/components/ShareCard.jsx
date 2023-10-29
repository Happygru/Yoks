import RButton from "../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";

const ShareCard = (props) => {
  const { image, title, text } = props;
  return (
    <div
      className="max-w-[400px] w-full rounded-lg overflow-hidden shadow-2xl shadow-neutral-400 relative"
      {...props}
    >
      <img src={image} alt="" className="w-full" />
      <div className="w-full p-4 flex flex-col gap-4 pb-20">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-base">{text}</p>
        <RButton
          isfullradius={true}
          style={{ position: "absolute", bottom: "15px" }}
        >
          <span className="flex items-center gap-4 px-10 text-base font-normal">
            Get Started
            <BsArrowUpRight />
          </span>
        </RButton>
      </div>
    </div>
  );
};

export default ShareCard;
