import RButton from "./RButton";
import { ImUsers, ImLock } from "react-icons/im";
import { GrCar } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const FleetCard = (props) => {
  const { title, description, image, passengers, doors, luggage } = props;
  return (
    <div
      {...props}
      className="p-8 bg-white rounded-md max-w-[400px] w-full flex flex-col gap-4 border border-[#dedede] shadow-lg cursor-pointer h-full"
    >
      <h1 className="text-[var(--text-color)] font-semibold text-[20px]">
        {title}
      </h1>
      <p className="text-[var(--text-color)] text-lg font-text h-[84px]">
        {description}
      </p>
      <div>
        <img src={image} className="w-full" alt="" />
        <div className="flex flex-col gap-4 pt-2">
          <div className="grid grid-cols-2">
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <ImUsers />
              </div>
              <p className="text-[var(--text-color)]">
                Passengers {passengers}
              </p>
            </div>
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <ImLock className="ml-[7px]" />
              </div>
              <p className="text-[var(--text-color)]">Luggage {luggage}</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <img src="image/home/car_console.svg" className="w-6" alt="" />
              </div>
              <p className="text-[var(--text-color)]">Gear-Box manual</p>
            </div>
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <TbAirConditioning />
              </div>
              <p className="text-[var(--text-color)]">Airconditioning</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <GrCar />
              </div>
              <p className="text-[var(--text-color)]">Doors {doors}</p>
            </div>
            <div className="flex items-center col-span-1">
              <RButton isradius={true}>
                <Link className="flex items-center gap-2" to="/booking">
                  Book Now
                  <BsArrowUpRight />
                </Link>
              </RButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
