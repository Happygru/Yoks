import { Card } from "@mui/material";
import { Table, Tag } from "antd";
import RButton from "../../components/RButton";

const MyBooking = () => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderid",
      width: 120,
    },
    {
      title: "Date-Time",
      dataIndex: "date_time",
    },
    {
      title: "From-To",
      dataIndex: "fromto",
    },
    {
      title: "Total",
      dataIndex: "total",
    },
    {
      title: "BookingStatus",
      dataIndex: "bookingstatus",
      render: (text) => {
        switch (text) {
          case 0:
            return <Tag>Completed</Tag>;
          case 1:
            return <Tag>In Progress</Tag>;
          case 2:
            return <Tag>Success</Tag>;
          case 3:
            return <Tag>Rejected</Tag>;
          default:
            return <></>;
        }
      },
    },
    {
      title: "Action",
      render: (text) => {
        return (
          <RButton isradius={true}>
            <span className="flex w-full justify-center items-center gap-2 px-10">
              Rebook
            </span>
          </RButton>
        );
      },
    },
  ];
  return (
    <>
      <div className="w-full py-6 flex flex-col gap-2">
        <p className="font-bold text-xl">My Booking</p>
        <p className="font-text text-sm">Dashboard - Edit Profile</p>
      </div>
      <Card className="w-full p-6 flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <p className="font-bold text-xl">Current Booking</p>
        </div>
        <div className="w-full">
          <Table columns={columns} />
        </div>
      </Card>
      <Card className="w-full p-6 flex flex-col">
        <div className="w-full flex justify-between items-center">
          <p className="font-bold text-xl">Single Booking</p>
        </div>
      </Card>
    </>
  );
};

export default MyBooking;
