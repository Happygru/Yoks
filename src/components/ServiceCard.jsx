/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const ServiceCard = (props) => {
  const { img, title, text, url } = props;
  return (
    <div className="flex flex-col justify-between w-full h-full gap-3 cursor-pointer">
      <div className="flex flex-col gap-4">
        <img
          src={`image/services/${img}`}
          className="w-full rounded-md"
          alt=""
        />
        <h1 className="text-2xl">{title}</h1>
        <p className="text-base">{text}</p>
      </div>
      <div>
        <Link
          href={`/${url}`}
          className="text-[var(--main-color)] flex gap-4 items-center"
        >
          <span className="text-base">Learn more</span>
          <BsArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
