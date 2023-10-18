import { Card } from "@mui/material";
import { TbCalendarStar } from "react-icons/tb";
import { Table, Tag } from "antd";
import RButton from "../../components/RButton";

const Dashboard = () => {
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
        <p className="font-bold text-xl">Dashboard</p>
        <p className="font-text text-sm">Dashboard</p>
      </div>
      <div className="w-full grid grid-cols-1 gap-6">
        <div className="col-span-1 grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card className="p-8 w-full flex items-center justify-center gap-8">
              <p className="rounded-xl bg-gray-200 text-4xl p-3 flex-grow-0">
                <TbCalendarStar />
              </p>
              <div className="w-full">
                <p className="font-text font-bold">Total Booking</p>
                <p className="font-text font-bold text-3xl">93</p>
              </div>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="p-8 w-full flex items-center justify-center gap-8">
              <p className="rounded-xl bg-gray-200 text-4xl p-3 flex-grow-0">
                <TbCalendarStar />
              </p>
              <div className="w-full">
                <p className="font-text font-bold">Completed Booking</p>
                <p className="font-text font-bold text-3xl">21</p>
              </div>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="p-8 w-full flex items-center justify-center gap-8">
              <p className="rounded-xl bg-gray-200 text-4xl p-3 flex-grow-0">
                <TbCalendarStar />
              </p>
              <div className="w-full">
                <p className="font-text font-bold">Active Booking</p>
                <p className="font-text font-bold text-3xl">19</p>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <Card className="w-full p-6 flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <p className="font-bold text-xl">Booking History</p>
        </div>
        <div className="w-full">
          <Table columns={columns} />
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
