/* eslint-disable @next/next/no-img-element */

import RButton from "./RButton";
import { ImUsers, ImLock } from "react-icons/im";
import { GrCar } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";

const FleetCard = (props) => {
  return (
    <div
      {...props}
      className="p-8 bg-white rounded-md max-w-[370px] w-full flex flex-col gap-4 border border-[#dedede] shadow-lg cursor-pointer"
    >
      <h1 className="text-[var(--text-color)] font-semibold text-[20px]">
        Compact Sedan Cars
      </h1>
      <p className="text-[var(--text-color)] text-lg">
        Sedab and it is powered by 1.4 litre naturally aspirated four-cylinder
        engine, six speed manual gearbox
      </p>
      <div>
        <img src="image/home/fleetcar.svg" className="w-full" alt="" />
        <div className="flex flex-col gap-4 pt-2">
          <div className="grid grid-cols-2">
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <ImUsers />
              </div>
              <p className="text-[var(--text-color)]">Passengers 4</p>
            </div>
            <div className="flex items-center col-span-1 gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <ImLock className="ml-[7px]" />
              </div>
              <p className="text-[var(--text-color)]">Luggage 2</p>
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
              <p className="text-[var(--text-color)]">Doors 4</p>
            </div>
            <div className="flex items-center col-span-1">
              <RButton isradius={true}>
                <span className="flex items-center gap-2">
                  Book Now
                  <BsArrowUpRight />
                </span>
              </RButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
