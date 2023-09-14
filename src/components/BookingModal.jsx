import { Modal, Tabs } from "antd";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { BsCalendar4Event } from "react-icons/bs";
import Select from "react-select";
import ButtonDatePicker from "./ButtonDatePicker";
import { useState } from "react";
import moment from "moment";
import ButtonTimePicker from "./ButtonTimePicker";
import { TbClockShare } from "react-icons/tb";
import { useEffect } from "react";
import { getCityAPIAuthToken } from "../utils/getCities";

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
  const [wholeDayServiceType, setWholeDayServiceType] = useState({
    label: "Self-Drive",
    value: "self-drive",
  });

  const [startdate, setStartDate] = useState(moment(new Date()));
  const [starttime, setStartTime] = useState(moment(new Date()));
  const [enddate, setEndDate] = useState(moment(new Date()));
  const [endtime, setEndTime] = useState(moment(new Date()));
  // const [hourlyServiceType, setHourlyService] = useState(1);

  const proceed = () => {};

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    getCityAPIAuthToken();
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
      onOk={proceed}
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
                value={wholeDayServiceType}
                onChange={setWholeDayServiceType}
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
                  {startdate?.format("MMM DD, YYYY")}
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
                  {enddate?.format("MMM DD, YYYY")}
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
                <p className="text-[#333]">Start Time</p>
                <p className="text-[var(--text-color)] font-bold">
                  {endtime?.format("h:mm A")}
                </p>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Hourly" key="2">
          Content of Tab Pane 2
        </TabPane>
      </BTabs>
    </BModal>
  );
};

export default BookingModal;
