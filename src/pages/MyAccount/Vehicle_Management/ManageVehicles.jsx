import { useNavigate } from "react-router-dom";
import RButton from "../../../components/RButton";
import { Card } from "@mui/material";
import { Table } from "antd";
import { HiPlus } from 'react-icons/hi';

const ManageVehicles = () => {

  const navigate = useNavigate();

  const columns = [
    {
      title: "Vehicle make",
      dataIndex: "vehicle_make",
      width: 120,
    },
    {
      title: 'Vehicle model',
      dataIndex: 'vehicle_model',
    },
    {
      title: 'Vehicle type',
      dataIndex: 'vehicle_model'
    },
    {
      title: 'License Plate Number' ,
      dataIndex: 'license_plate_number'
    },
    {
      title: 'Insurance Type',
      dataIndex: 'insurance_type'
    },
    {
      title: 'service_type',
      dataIndex: 'service_type'
    },
    {
      title: 'Action',
      render: () => (<></>)
    },
    {
      title: 'Activate',
      render: () => (<></>)
    }
  ];

  const addVehicle = () => {
    navigate('/new_vehicle')
  }

  return <>
    <div className="w-full py-6 flex flex-col gap-2">
      <p className="font-bold text-xl">Vehicle Management</p>
      <p className="font-text text-sm">Dashboard - vehicle management</p>
    </div>
    <Card className="w-full p-6 flex flex-col gap-6">
      <div className="w-full flex justify-between items-center">
        <p className="font-bold text-xl">Vehicle list</p>
        <RButton
          isradius={false}
          onClick={() => addVehicle()}
        >
          <span className="flex items-center gap-2 text-sm">
            <HiPlus />
            Add Vehicle
          </span>
        </RButton>
      </div>
      <div className="w-full">
        <Table columns={columns} />
      </div>
    </Card>
  </>
}

export default ManageVehicles;