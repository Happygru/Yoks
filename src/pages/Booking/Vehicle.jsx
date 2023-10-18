/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicleAllList, setVehicleID } from "../../redux/actions/bookingAction";
import VehicleCarItem from "../../components/VehicleCarItem";

const Vehicle = ({ onStep }) => {
  const dispatch = useDispatch();
  const book_state = useSelector((state) => state.book);

  const onSelectVehicle = (vehicle_id) => {
    onStep(2);
    setVehicleID(dispatch, vehicle_id);
  }

  const getData = () => {
    let postData;
    if(book_state?.rtype === 2)
      postData = {
        stype: book_state?.serviceType.value,
        startdate: book_state?.startdate.format('YYYY-MM-DD'),
        enddate: book_state?.enddate.format('YYYY-MM-DD'),
        starttime: book_state?.starttime.format('HH:mm:ss'),
        endtime: book_state?.endtime.format('HH:mm:ss'),
      }
    else
      postData = {
        hours: book_state?.serviceHourly.value
      }
    getVehicleAllList(dispatch, postData, book_state?.rtype);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p className="font-bold text-3xl">Select Your Car</p>
      <div className="w-full mt-4">
        {
          book_state?.fleet_list?.map((item, index) => {
            return (
              <VehicleCarItem
                key={index}
                param={item}
                onSelect={onSelectVehicle}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default Vehicle;
