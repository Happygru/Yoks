import RButton from "../../components/RButton";
import { Card, TextField } from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";

const PaymentDetails = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-2 py-6">
        <p className="text-xl font-bold">Payment Details</p>
        <p className="text-sm font-text">Dashboard - Payment Details</p>
      </div>
      <Card className="flex flex-col w-full gap-6 p-6 md:w-2/3">
        <div className="grid w-full grid-cols-2 gap-8">
          <div className="flex flex-col col-span-1 gap-6">
            <p className="text-base font-bold">Bank Account Details</p>
            <TextField
              fullWidth
              label="Bank Account Number"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Bank Account Name"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Bank Name"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Bank Branch"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="flex flex-col col-span-1 gap-6">
            <p className="text-base font-bold">Mobile Wallet Details</p>
            <TextField
              fullWidth
              label="Mobile Wallet Number"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Mobile Wallet Name"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Mobile Wallet Network"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <RButton
            isradius={true}
            style={{ backgroundColor: "rgba(237,139,0,0.9)" }}
          >
            <span className="flex items-center justify-center w-full gap-2 px-4 text-base font-normal">
              Save
              <BsArrowUpRight className="font-bold" />
            </span>
          </RButton>
        </div>
      </Card>
    </>
  );
};

export default PaymentDetails;
