/* eslint-disable react-hooks/exhaustive-deps */
import BreadCrumb from "../../components/BreadCrumb";
import FleetCard from "../../components/FleetCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCarList } from "../../redux/actions/fleetAction";
import { useEffect } from "react";
import { SET_LOADING } from "../../redux/type";
import BottomBar from "../../components/BottomBar";

const OurFleet = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.fleet.carList);

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: true });
    getCarList(dispatch);
  }, []);

  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Our Fleet">
          <Link to="/">Home</Link> - <Link to="#">Our Fleet</Link>
        </BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-6 place-items-center">
            {carList.length > 0 ? (
              carList.map((item, index) => (
                <div className="col-span-1">
                  <FleetCard
                    title={item.name}
                    description={item.description}
                    passengers={
                      item.vehicles.length > 0
                        ? item.vehicles[0].passengers
                        : ""
                    }
                    image={`${
                      item.vehicles.length > 0
                        ? item.vehicles[0].image
                        : "image/home/fleetcar1.png"
                    }`}
                    doors={
                      item.vehicles.length > 0 ? item.vehicles[0].doors : ""
                    }
                    luggage={
                      item.vehicles.length > 0 ? item.vehicles[0].suitcases : ""
                    }
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="150"
                  />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default OurFleet;
