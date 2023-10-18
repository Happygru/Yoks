/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PiPoliceCarLight } from "react-icons/pi";
import { IoMdSwitch } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { BsCalendar4Event, BsCheck2 } from "react-icons/bs";
import BookingStepCard from "../../components/BookingStepCard";
import Vehicle from "./Vehicle";
import AddOn from "./AddOn";
import Payment from "./Payment";
import Details from "./Details";
import { Card } from "@mui/material";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../../utils/config";
import { SET_LOADING } from "../../redux/type";
import { getInfoByToken } from "../../redux/actions/authAction";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book_state = useSelector((state) => state.book);

  const [step, setStep] = useState(1);

  const [markers, setMarkers] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: true });
    getInfoByToken(dispatch, true, navigate);
  }, []);

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 7.9465,
    lng: -1.0232,
  };

  const onMapClick = (e) => {
    setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);
  };

  const directionsCallback = (res) => {
    if (res !== null && res.status === "OK") setResponse(res);
  };

  const tabPaneActive = (key) => {
    switch (key) {
      case 1:
        return <Vehicle onStep={setStep} />;
      case 2:
        return <AddOn />;
      case 3:
        return <Details />;
      case 4:
        return <Payment />;
      default:
        break;
    }
  };

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
                isactive={step >= 1}
                onClick={() => setStep(1)}
              />
            </div>
            <div className="col-span-1">
              <BookingStepCard
                icon={<IoMdSwitch />}
                title="Add-On"
                num="02"
                isactive={step >= 2}
                onClick={() => setStep(2)}
              />
            </div>
            <div className="col-span-1">
              <BookingStepCard
                icon={<FiUsers />}
                title="Details"
                num="03"
                isactive={step >= 3}
                onClick={() => setStep(3)}
              />
            </div>
            <div className="col-span-1">
              <BookingStepCard
                icon={<MdPayment />}
                title="Payment"
                num="04"
                isactive={step === 4}
                onClick={() => setStep(4)}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 py-10 gap-6">
            <div className="col-span-2">{tabPaneActive(step)}</div>
            <div className="col-span-1">
              <Card className="p-6">
                <div className="w-full flex justify-between items-center">
                  <p className="text-xl font-bold"> Ride Summary</p>
                  <p className="text-sm font-text underline cursor-pointer">
                    Edit
                  </p>
                </div>
                <div className="w-full mt-4 relative flex flex-col gap-4">
                  <div className="h-20 w-2 absolute border-red-600 border-dashed border-l-2 left-[20px] top-[35px] z-0" />
                  <div className="relative w-full flex items-center gap-4 z-10">
                    <div
                      className="text-white text-base font-bot px-4 py-2 bg-[100%_100%]"
                      style={{
                        backgroundImage: "url(image/quote.png)",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      A
                    </div>
                    <p className="font-text font-bold">
                      {book_state?.pickupLocation.value}
                    </p>
                  </div>
                  <div className="relative w-full flex items-center gap-4 mt-6 z-10">
                    <div
                      className="text-white text-base font-bot px-4 py-2 bg-[100%_100%]"
                      style={{
                        backgroundImage: "url(image/quote.png)",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      B
                    </div>
                    <p className="font-text font-bold">
                      {book_state?.dropoffLocation.value}
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-4">
                    <div className="px-3 py-3 rounded-full bg-[#024273] text-white">
                      <BsCalendar4Event />
                    </div>
                    <p className="font-text font-bold">
                      {book_state?.startdate.format("ddd, MMM DD, YYYY")}
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-4">
                    <div className="px-3 py-3 rounded-full bg-[#024273] text-white">
                      <BsCalendar4Event />
                    </div>
                    <p className="font-text font-bold">
                      {book_state?.starttime.format("h:mm A")}
                    </p>
                  </div>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden my-10">
                  <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                    <GoogleMap
                      mapContainerStyle={mapStyles}
                      zoom={10}
                      center={defaultCenter}
                      onClick={onMapClick}
                    >
                      {markers.map((marker, i) => (
                        <Marker key={i} position={marker} />
                      ))}
                      {markers.length === 2 && (
                        <DirectionsService
                          options={{
                            origin: markers[0],
                            destination: markers[1],
                            travelMode: "DRIVING",
                          }}
                          callback={directionsCallback}
                        />
                      )}
                      {response && <DirectionsRenderer directions={response} />}
                    </GoogleMap>
                  </LoadScript>
                </div>
                <div className="w-full grid grid-cols-2">
                  <div className="col-span-1 flex flex-col gap-2">
                    <p className="font-text font-semibold text-[#FAEAEA]">
                      Total Distance
                    </p>
                    <p className="font-text font-semibold">311km/194 miles</p>
                  </div>
                  <div className="col-span-1 flex flex-col gap-2">
                    <p className="font-text font-semibold text-[#FAEAEA]">
                      Total Time
                    </p>
                    <p className="font-text font-semibold">3h 43m</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 mt-8">
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex gap-4">
                    <p className="rounded-full bg-[#F0FBF7] p-2">
                      <BsCheck2 />
                    </p>
                    <p className="pt-1">+100.000 passengers transported</p>
                  </div>
                  <div className="w-full flex gap-4">
                    <p className="rounded-full bg-[#F0FBF7] p-2">
                      <BsCheck2 />
                    </p>
                    <p className="pt-1">Instant confirmation</p>
                  </div>
                  <div className="w-full flex gap-4">
                    <p className="rounded-full bg-[#F0FBF7] p-2">
                      <BsCheck2 />
                    </p>
                    <p className="pt-1">All-inclusive pricing</p>
                  </div>
                  <div className="w-full flex gap-4 items-start justify-start">
                    <p className="rounded-full bg-[#F0FBF7] p-2">
                      <BsCheck2 />
                    </p>
                    <p className="pt-1">
                      Secure Payment by credit card, debit card or Mobile Money
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
