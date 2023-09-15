/* eslint-disable react-hooks/exhaustive-deps */
// React imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Third Party libraries
import { Modal, Tabs } from "antd";
import styled from "styled-components";
import Select from "react-select";

// Icon Imports
import { BsArrowUpRight, BsCalendar4Event } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { LiaShareSolid } from "react-icons/lia";
import { TbClockShare } from "react-icons/tb";

// Component and utility function imports
import ButtonDatePicker from "./ButtonDatePicker";
import ButtonSelect from "./ButtonSelect";
import ButtonTimePicker from "./ButtonTimePicker";
import RButton from "./RButton";
import { getGhanaCityList } from "../utils/getCities";
import { SET_BOOKING_STEP_1 } from "../redux/type";

const { TabPane } = Tabs;

const BModal = styled(Modal)`
  & > .ant-modal-content {
    padding: 0;
    button {
      color: white;
      top: 0px;
      right: 0px;
    }
    .ant-modal-header {
      background-color: #024273;
      padding: 15px;
      border-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
    }
    .ant-modal-body {
      padding-block: 20px;
    }
    .ant-modal-footer {
      display: none;
    }
  }
`;

const BTabs = styled(Tabs)`
  div.ant-tabs-nav,
  div.ant-tabs-content-holder {
    padding-inline: 20px;
  }
  & div.ant-tabs-tab {
    &.ant-tabs-tab-active > .ant-tabs-tab-btn {
      color: var(--text-color);
    }
    .ant-tabs-tab-btn {
      color: #faeaea;
    }
    .ant-tabs-tab-btn:focus {
      color: var(--text-color);
    }
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    background: #024273;
  }
`;

const BookingModal = ({ visible, setVisible }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book_state = useSelector(state => state.book);
  
  const [serviceType, setServiceType] = useState(book_state?.serviceType);
  const [serviceHourly, setServiceHourly] = useState(book_state?.serviceHourly);
  const [startdate, setStartDate] = useState(book_state?.startdate);
  const [starttime, setStartTime] = useState(book_state?.starttime);
  const [enddate, setEndDate] = useState(book_state?.enddate);
  const [endtime, setEndTime] = useState(book_state?.endtime);
  const [pickupLocation, setPickupLocation] = useState(book_state?.pickupLocation);
  const [dropoffLocation, setDropoffLocation] = useState(book_state?.dropoffLocation);

  const [cityList, setCityList] = useState([]);

  const onProceed = (type) => {
    const bookingData = {
      rtype: type,
      startdate,
      starttime,
      enddate,
      endtime,
      pickupLocation: pickupLocation,
      dropoffLocation: dropoffLocation,
      serviceType: serviceType,
      serviceHourly: serviceHourly,
    };
    dispatch({ type: SET_BOOKING_STEP_1, payload: bookingData });
    navigate("/booking");
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    const getData = async () => {
      setCityList(await getGhanaCityList());
    };
    getData();
  }, []);

  return (
    <BModal
      title={
        <div className="flex items-center gap-5">
          <FaPlay className="text-white text-xl" />
          <p className="font-bold text-xl text-white">Book Now</p>
        </div>
      }
      width={"500px"}
      open={visible}
      onCancel={handleCancel}
    >
      <BTabs defaultActiveKey="1">
        <TabPane tab="Whole Day" key="1">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <p className="font-bold pb-2">Service Type</p>
              <Select
                options={[
                  { label: "Self-Drive", value: "self-drive" },
                  { label: "Chauffer Drive", value: "chauffeur-driven" },
                ]}
                value={serviceType}
                onChange={setServiceType}
              />
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonDatePicker
                  onDateChange={(value) => setStartDate(value)}
                  value={startdate}
                  icon={<BsCalendar4Event />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">Start Date</p>
                <p className="text-[var(--text-color)] font-bold">
                  {startdate?.format("ddd, MMM DD, YYYY")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonTimePicker
                  onTimeChange={(value) => setStartTime(value)}
                  value={starttime}
                  icon={<TbClockShare />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">Start Time</p>
                <p className="text-[var(--text-color)] font-bold">
                  {starttime?.format("h:mm A")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonDatePicker
                  onDateChange={(value) => setEndDate(value)}
                  value={enddate}
                  icon={<BsCalendar4Event />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">End Date</p>
                <p className="text-[var(--text-color)] font-bold">
                  {enddate?.format("ddd, MMM DD, YYYY")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonTimePicker
                  onTimeChange={(value) => setEndTime(value)}
                  value={endtime}
                  icon={<TbClockShare />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">End Time</p>
                <p className="text-[var(--text-color)] font-bold">
                  {endtime?.format("h:mm A")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonSelect
                  label={<LiaShareSolid />}
                  options={cityList}
                  value={pickupLocation}
                  onOptionChange={setPickupLocation}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">PickUp Location</p>
                <p className="text-[var(--text-color)] font-bold">
                  {pickupLocation?.value}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonSelect
                  label={
                    <LiaShareSolid style={{ transform: "rotateY(180deg)" }} />
                  }
                  options={cityList}
                  value={dropoffLocation}
                  onOptionChange={setDropoffLocation}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">DropOff Location</p>
                <p className="text-[var(--text-color)] font-bold">
                  {dropoffLocation?.value}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <RButton
                isradius={true}
                isfullwidth={true}
                onClick={() => onProceed(2)}
              >
                <span className="flex w-full justify-center items-center gap-2 px-10">
                  Proceed <BsArrowUpRight className="font-bold" />
                </span>
              </RButton>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Hourly" key="2">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <p className="font-bold pb-2">Service Hourly</p>
              <Select
                options={[
                  { value: 1, label: "1 Hr" },
                  { value: 2, label: "2 Hr" },
                  { value: 3, label: "3 Hr" },
                  { value: 4, label: "4 Hr" },
                  { value: 5, label: "5 Hr" },
                  { value: 6, label: "6 Hr" },
                ]}
                value={serviceHourly}
                onChange={setServiceHourly}
              />
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonDatePicker
                  onDateChange={(value) => setStartDate(value)}
                  value={startdate}
                  icon={<BsCalendar4Event />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">Start Date</p>
                <p className="text-[var(--text-color)] font-bold">
                  {startdate?.format("ddd, MMM DD, YYYY")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonTimePicker
                  onTimeChange={(value) => setStartTime(value)}
                  value={starttime}
                  icon={<TbClockShare />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">Start Time</p>
                <p className="text-[var(--text-color)] font-bold">
                  {starttime?.format("h:mm A")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonDatePicker
                  onDateChange={(value) => setEndDate(value)}
                  value={enddate}
                  icon={<BsCalendar4Event />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">End Date</p>
                <p className="text-[var(--text-color)] font-bold">
                  {enddate?.format("ddd, MMM DD, YYYY")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonTimePicker
                  onTimeChange={(value) => setEndTime(value)}
                  value={endtime}
                  icon={<TbClockShare />}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">End Time</p>
                <p className="text-[var(--text-color)] font-bold">
                  {endtime?.format("h:mm A")}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonSelect
                  label={<LiaShareSolid />}
                  options={cityList}
                  value={pickupLocation}
                  onOptionChange={setPickupLocation}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">PickUp Location</p>
                <p className="text-[var(--text-color)] font-bold">
                  {pickupLocation?.value}
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-sm bg-[#F6F6F6] p-2 flex items-center justify-start gap-4">
              <div className="bg-white rounded-md p-2 flex-grow">
                <ButtonSelect
                  label={
                    <LiaShareSolid style={{ transform: "rotateY(180deg)" }} />
                  }
                  options={cityList}
                  value={dropoffLocation}
                  onOptionChange={setDropoffLocation}
                />
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-[#333]">DropOff Location</p>
                <p className="text-[var(--text-color)] font-bold">
                  {dropoffLocation?.value}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <RButton
                isradius={true}
                isfullwidth={true}
                onClick={() => onProceed(1)}
              >
                <span className="flex w-full justify-center items-center gap-2 px-10">
                  Proceed <BsArrowUpRight className="font-bold" />
                </span>
              </RButton>
            </div>
          </div>
        </TabPane>
      </BTabs>
    </BModal>
  );
};

export default BookingModal;
