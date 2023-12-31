import { useState } from "react";
import RButton from "./RButton";
import { ImUsers, ImLock } from "react-icons/im";
import { GrCar } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import BookingModal from "./BookingModal";

const FleetCard = (props) => {
  const { title, description, image, passengers, doors, luggage } = props;
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  return (
    <div
      {...props}
      className="p-8 bg-white rounded-md max-w-[400px] w-full flex flex-col gap-4 border border-[#dedede] shadow-lg cursor-pointer h-full"
    >
      <h1 className="text-[var(--text-color)] font-semibold text-[20px]">
        {title}
      </h1>
      <p className="text-[var(--text-color)] text-lg font-text h-[90px]">
        {description}
      </p>
      <div>
        <div className="w-full h-[calc(150px+5vw)] sm:h-[calc(100px+5vw)] overflow-hidden relative flex items-center justify-center">
          <img src={image} className="w-full absolute" alt="" />
        </div>
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
                <span className="flex items-center gap-2" onClick={() => setBookingModalVisible(true)}>
                  Book Now
                  <BsArrowUpRight />
                </span>
              </RButton>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        visible={bookingModalVisible}
        setVisible={setBookingModalVisible}
      />
    </div>
  );
};

export default FleetCard;
