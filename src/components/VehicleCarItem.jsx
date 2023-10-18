import { useSelector } from "react-redux";
import { Card } from "@mui/material";
import RButton from "./RButton";
import { IoRibbon } from "react-icons/io5";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsShieldFillCheck, BsArrowUpRight } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const VehicleCarItem = ({ param, onSelect }) => {
  const selected_vehicle_id = useSelector((state) => state.book?.vehicle_id);
  const { image, unit_rate_without_tax, vehicle_category, vehicle, vehicle_category_id } = param;
  return (
    <Card className={`w-full p-6 ${selected_vehicle_id === vehicle_category_id ? '!bg-[#F0FBF7]' : ''} mt-6`}>
      <div className="grid grid-cols-3 divide-x">
        <div className="col-span-2 pr-6">
          <img
            src={image}
            alt="defaultImg"
            className="w-full"
          />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="col-span-1 flex gap-2 items-center">
              <p className="font-bold text-xl">
                <IoRibbon />
              </p>
              <p>Meet & Greet included</p>
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <p className="font-bold text-xl">
                <MdCancel />
              </p>
              <p>Free cancellation</p>
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <p className="font-bold text-xl">
                <BiSolidTimeFive />
              </p>
              <p>Free Waiting time</p>
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <p className="font-bold text-lg">
                <BsShieldFillCheck />
              </p>
              <p>Safe and secure travel</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-6">
          <div className="w-full flex flex-col gap-8">
            <p className="text-xl font-bold">{ vehicle_category }</p>
            <p className="font-text h-[150px]">
              { vehicle }
            </p>
          </div>
          <div className="w-full flex flex-col gap-8">
            <p className="text-4xl font-bold currency_after">{unit_rate_without_tax}</p>
            <p className="font-text">All prices include VAT, fees & tip.</p>
          </div>
          <div className="w-full mt-4">
            <RButton isradius={true} isfullwidth={true} style={{ backgroundColor: `${selected_vehicle_id === vehicle_category_id ? '#ED8B00' : ''}` }}>
              <span className="flex w-full justify-center items-center gap-2 px-10 font-normal" onClick={() => onSelect(vehicle_category_id)}>
                Select
                <BsArrowUpRight className="font-bold" />
              </span>
            </RButton>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VehicleCarItem;