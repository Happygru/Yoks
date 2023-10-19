import { Card } from "@mui/material";
import { Table } from "antd";

const ExpensesTransaction = () => {

  const columns = [
    {
      title: 'Vehicle',
      dataIndex: 'vehicle'
    },
    {
      title: 'Expenses Type',
      dataIndex: 'expenses_type'
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
      <p className="font-bold text-xl">Expenses Transactions</p>
      <p className="font-text text-sm">Dashboard - Expenses Transactions</p>
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

export default ExpensesTransaction;