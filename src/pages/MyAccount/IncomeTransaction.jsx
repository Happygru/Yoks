import { Card } from "@mui/material";
import { Table } from "antd";

const IncomeTransaction = () => {

  const columns = [
    {
      title: 'Vehicle',
      dataIndex: 'vehicle'
    },
    {
      title: 'Income Type',
      dataIndex: 'income_type'
    },
    {
      title: 'Tax Amount GHS',
      dataIndex: 'tax_amount'
    },
    {
      title: 'Amount GHS',
      dataIndex: 'amount'
    },
    {
      title: 'Date',
      dataIndex: 'date'
    }
  ];

  return <>
    <div className="w-full py-6 flex flex-col gap-2">
      <p className="font-bold text-xl">Income Transactions</p>
      <p className="font-text text-sm">Dashboard - Income Transactions</p>
    </div>
    <Card className="w-full p-6 flex flex-col gap-6">
      <div className="w-full flex justify-between items-center">
        <p className="font-bold text-xl">Vehicle list</p>
      </div>
      <div className="w-full">
        <Table columns={columns} />
      </div>
    </Card>
  </>
}

export default IncomeTransaction;