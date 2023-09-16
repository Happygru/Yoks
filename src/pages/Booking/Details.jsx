import { useSelector } from "react-redux";
import { Card, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import RButton from "../../components/RButton";
import Select from "react-select";
import styled from "styled-components";
import citydata from "../../utils/citylist.json";
import { BsArrowUpRight } from "react-icons/bs";

const Details = () => {
  const book_state = useSelector((state) => state.book);
  const cityList = citydata;

  const MSelect = styled(Select)`
    height: 53px;
    width: 100%;
    & > div:first-of-type {
      height: 100%;
      width: 100%;
    }
  `;

  return (
    <>
      {book_state?.serviceType.value === "self-drive" ? (
        <div className="flex flex-col gap-16 mb-16">
          <div className="w-full flex items-center md:items-start flex-col md:flex-row gap-6">
            <p className="text-2xl font-bold">Service Type Selected:</p>
            <RButton
              isradius={true}
              style={{
                backgroundColor: "#F0FBF7",
                border: "1px solid #024273",
              }}
            >
              <span className="flex w-full justify-center items-center gap-2 px-6 py-1 text-[#024273]">
                Self Drive
              </span>
            </RButton>
          </div>
          <Card className="p-4 w-full flex gap-6">
            <TextField
              label="Upload License"
              placeholder="Drivers License"
              focused
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
            <div className="flex-grow">
              <RButton isradius={true}>
                <span className="flex w-full justify-center items-center gap-2 px-10">
                  Select file
                </span>
              </RButton>
            </div>
          </Card>
          <Card className="p-4 w-full flex gap-6">
            <TextField
              label="Passport or ID Card Upload"
              placeholder="Password or ID Card"
              focused
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
            <div className="flex-grow">
              <RButton isradius={true}>
                <span className="flex w-full justify-center items-center gap-2 px-10">
                  Select file
                </span>
              </RButton>
            </div>
          </Card>
        </div>
      ) : (
        <Card className="p-6">
          <div className="w-full flex items-center md:items-start flex-col md:flex-row gap-6">
            <p className="text-2xl font-bold">Service Type Selected:</p>
            <RButton
              isradius={true}
              style={{
                backgroundColor: "#F0FBF7",
                border: "1px solid #024273",
              }}
            >
              <span className="flex w-full justify-center items-center gap-2 px-6 py-1 text-[#024273]">
                Chauffer Drive
              </span>
            </RButton>
          </div>
          <div className="w-full mt-16 grid grid-cols-1 gap-8">
            <div className="col-span-1">
              <p className="text-2xl font-semibold">
                Airport Pickup Service Details
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="col-span-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Arrival Date" className="w-full" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="col-span-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker label="Arrival Time" className="w-full" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-12">
              <TextField label="Flieght No" />
            </div>
          </div>
        </Card>
      )}
      <Card className="p-6 mt-6 !overflow-visible">
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="col-span-1 flex flex-col gap-6">
            <p className="font-bold text-2xl">
              Select Destination Outside {book_state?.pickupLocation.value}
            </p>
            <MSelect options={cityList} />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-start gap-6">
            <p className="font-bold text-2xl">Estimated Extra Cost</p>
            <Card className="px-16 py-6">
              <p className="font-bold text-2xl"> $300 </p>
            </Card>
          </div>
        </div>
      </Card>
      {book_state?.serviceType.value === "self-drive" ? (
        <div className="flex gap-3 cursor-pointer items-center mt-8">
          <input
            type="checkbox"
            id="remember_account"
            className="remember_check cursor-pointer"
          />
          <label
            className="font-text select-none cursor-pointer"
            htmlFor="remember_account"
          >
            I testify that i am 25 years of age and have at least 5 years
            driving experience
          </label>
        </div>
      ) : (
        <></>
      )}
      <div className="w-full mt-12">
        <RButton isradius={true} isfullwidth={true}>
          <span className="flex w-full justify-center items-center gap-2 px-10">
            Continue <BsArrowUpRight className="font-bold" />
          </span>
        </RButton>
      </div>
    </>
  );
};

export default Details;
