import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useSelector } from "react-redux";
import { Card, TextField } from "@mui/material";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";

const Payment = () => {
  const userdata = useSelector((state) => state.auth.user);
  const [phone, setPhone] = useState(userdata?.phone);

  return (
    <>
      <Card className="p-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <TextField
              fullWidth
              label="Account Type"
              value={userdata?.ctype}
              inputProps={{ disabled: true }}
            />
          </div>
          <div className="col-span-1">
            <TextField
              fullWidth
              label="Name"
              value={userdata?.name}
              inputProps={{ disabled: true }}
            />
          </div>
          <div className="col-span-1">
            <PhoneInput
              value={phone}
              onChange={setPhone}
              country={"gn"}
              placeholder="Enter Phone Number"
              className="h-[53px]"
              inputClass="!h-[53px] !w-full"
            />
          </div>
          <div className="col-span-1">
            <TextField
              fullWidth
              label="Email"
              value={userdata?.email}
              inputProps={{ disabled: true }}
            />
          </div>
        </div>
      </Card>
      <Card className="p-2 w-max mt-12">
        <RButton isradius={true}>
          <span className="flex w-full justify-center items-center gap-2 px-10">
            Full Payment <BsArrowUpRight className="font-bold" />
          </span>
        </RButton>
      </Card>
      <p className="font-text mt-12">
        Please make a full payment to complete the booking process
      </p>
      <div className="flex gap-3 cursor-pointer items-center mt-12">
        <input
          type="checkbox"
          id="remember_account"
          className="remember_check cursor-pointer"
        />
        <label
          className="font-text select-none cursor-pointer"
          htmlFor="remember_account"
        >
          I accept the Terms & Conditions - Booking Conditions and Privacy
          Policy.*
        </label>
      </div>
      <div className="w-full mt-12">
        <RButton isradius={true} isfullwidth={true}>
          <span className="flex w-full justify-center items-center gap-2 px-10">
            Confirm Booking <BsArrowUpRight className="font-bold" />
          </span>
        </RButton>
      </div>
    </>
  );
};

export default Payment;
