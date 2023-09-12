import { PiPoliceCarLight } from "react-icons/pi";
import { IoMdSwitch } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import BookingStepCard from "../../components/BookingStepCard";

const Booking = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto">
          <div className="grid grid-cols-4 my-4 gap-8">
            <div className="col-span-1">
              <BookingStepCard
                icon={<PiPoliceCarLight />}
                title="Vehicle"
                num="01"
                isActive={true}
              />
            </div>
            <div className="col-span-1">
              <BookingStepCard icon={<IoMdSwitch />} title="Add-On" num="02" />
            </div>
            <div className="col-span-1">
              <BookingStepCard icon={<FiUsers />} title="Details" num="03" />
            </div>
            <div className="col-span-1">
              <BookingStepCard icon={<MdPayment />} title="Payment" num="04" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
