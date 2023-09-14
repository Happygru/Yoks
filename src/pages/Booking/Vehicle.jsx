/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicleAllList } from "../../redux/actions/bookingAction";
import { getGPSPosition } from "../../utils";
import { Card } from "@mui/material";
import RButton from "../../components/RButton";
import { IoRibbon } from "react-icons/io5";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsShieldFillCheck, BsArrowUpRight } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const Vehicle = () => {
  const dispatch = useDispatch();
  const book_state = useSelector((state) => state.book);

  const getData = async () => {
    let postData = {
      rtype: book_state?.rtype,
      stype: book_state?.serviceType.value,
      starttime: `${book_state?.startdate.format(
        "YYYY-MM-DD"
      )} ${book_state?.starttime.format("HH:mm:ss")}`,
      pickup: book_state?.pickupLocation.value,
      pickupgps: await getGPSPosition(book_state?.pickupLocation.value),
      dropoff: book_state?.dropoffLocation.value,
      dropoffgps: await getGPSPosition(book_state?.dropoffLocation.value),
    };

    if (book_state?.rtype === 1)
      postData = { ...postData, hours: book_state?.serviceHourly.value };
    else
      postData = {
        ...postData,
        endtime: `${book_state?.enddate.format(
          "YYYY-MM-DD"
        )} ${book_state?.endtime.format("HH:mm:ss")}`,
      };
    getVehicleAllList(dispatch, postData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p className="font-bold text-3xl">Select Your Car</p>
      <div className="w-full mt-4">
        <Card className="w-full p-6">
          <div className="grid grid-cols-3 divide-x">
            <div className="col-span-2 pr-6">
              <img
                src="image/booking/default.png"
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
                <p className="text-xl font-bold">Business Class</p>
                <p className="font-text h-[150px]">
                  Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                </p>
              </div>
              <div className="w-full flex flex-col gap-8">
                <p className="text-4xl font-bold">$125.25</p>
                <p className="font-text">All prices include VAT, fees & tip.</p>
              </div>
              <div className="w-full mt-4">
                <RButton isradius={true} isfullwidth={true}>
                  <span className="flex w-full justify-center items-center gap-2 px-10 font-normal">
                    Select
                    <BsArrowUpRight className="font-bold" />
                  </span>
                </RButton>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Vehicle;
