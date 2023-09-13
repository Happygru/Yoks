import { Card } from "@mui/material";
import { TbCalendarStar } from "react-icons/tb";

const Dashboard = () => {
  return (
    <>
      <div className="w-full py-6 flex flex-col gap-2">
        <p className="font-bold text-xl">Dashboard</p>
        <p className="font-text text-sm">Dashboard</p>
      </div>
      <div className="w-full grid grid-cols-1 gap-6">
        <div className="col-span-1 grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card className="p-8 w-full flex items-center justify-center gap-6">
              <p className="rounded-xl bg-gray-200 text-3xl p-3 flex-grow-0">
                <TbCalendarStar />
              </p>
              <div className="w-full"></div>
            </Card>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
};

export default Dashboard;
