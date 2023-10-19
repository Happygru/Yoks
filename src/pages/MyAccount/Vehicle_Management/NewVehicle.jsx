import { useState, useEffect } from "react";
import RButton from "../../../components/RButton";
import {
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";

const NewVehicle = () => {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);

  const years = Array.from({ length: 121 }, (_, i) => ({
    label: 2023 - i,
    value: 2023 - i,
  }));
  const months = Array.from({ length: 12 }, (_, i) => ({
    label: i + 1,
    value: i + 1,
  }));
  const [daysInMonth, setDaysInMonth] = useState(
    Array.from({ length: 31 }, (_, i) => ({ label: i + 1, value: i + 1 }))
  );

  useEffect(() => {
    if (month && year) {
      const newDaysInMonth = new Date(year, month, 0).getDate();
      const days = Array.from({ length: newDaysInMonth }, (_, i) => ({
        label: i + 1,
        value: i + 1,
      }));
      setDaysInMonth(days);

      if (day > newDaysInMonth) {
        setDay(days[days.length - 1].value);
      }
    }
  }, [month, year, day]);

  return (
    <>
      <div className="flex flex-col w-full gap-2 py-6">
        <p className="text-xl font-bold">Add Vehicle</p>
        <p className="text-sm font-text">Dashboard - add vehicle</p>
      </div>
      <Card className="flex flex-col w-full p-6 md:w-2/3">
        <div className="grid grid-cols-7 gap-6">
          <div className="col-span-3">
            <FormControl fullWidth size="small">
              <InputLabel>Vehicle make</InputLabel>
              <Select label="Vehicle make">
                <MenuItem value="Male">Make 1</MenuItem>
                <MenuItem value="Female">Make 2</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-span-3">
            <FormControl fullWidth size="small">
              <InputLabel>Vehicle model</InputLabel>
              <Select label="Vehicle model">
                <MenuItem value="Male">Model 1</MenuItem>
                <MenuItem value="Female">Model 2</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth size="small">
              <InputLabel>Date</InputLabel>
              <Select label="Date">
                <MenuItem value="1991">1991</MenuItem>
                <MenuItem value="1992">1992</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-span-3">
            <TextField
              fullWidth
              label="Licence plate number"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="col-span-3">
            <FormControl fullWidth size="small">
              <InputLabel>Vehicle type</InputLabel>
              <Select label="Vehicle type">
                <MenuItem value="1">Type 1</MenuItem>
                <MenuItem value="2">Type 2</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-span-1">
            <TextField
              fullWidth
              label="Color"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="col-span-3">
            <TextField
              fullWidth
              label="Vehicle Identification Number"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="col-span-3">
            <TextField
              fullWidth
              label="Vehicle Insurer"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="col-span-3">
            <FormControl fullWidth size="small">
              <InputLabel>Insurance type</InputLabel>
              <Select label="Insurance type">
                <MenuItem value="1">Type 1</MenuItem>
                <MenuItem value="2">Type 2</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-span-3">
            <TextField
              fullWidth
              label="Expiring Date"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <p className="font-bold">Services Selection</p>
          <p className="pl-8">
            Select services pool types you want your vehicle to operate in
          </p>
        </div>
        <div className="w-full mt-4">
          <FormGroup className="flex !flex-row gap-6 !flex-nowrap">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Chauffeur-driven"
            />
            <FormControlLabel control={<Checkbox />} label="Self-driven" />
          </FormGroup>
        </div>
        <div className="w-full mt-4">
          <p>
            <span className="font-bold">Vehicle Availability date:</span>
            <span> optional</span>
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 mt-8">
          <div className="flex col-span-1 gap-2">
            <FormControl fullWidth size="small">
              <InputLabel>Day</InputLabel>
              <Select
                label="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                {daysInMonth?.map((item) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Month</InputLabel>
              <Select
                label="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {months?.map((item) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Year</InputLabel>
              <Select
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {years?.map((item) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex col-span-1 gap-2">
            <FormControl fullWidth size="small">
              <InputLabel>Day</InputLabel>
              <Select
                label="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                {daysInMonth?.map((item) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Month</InputLabel>
              <Select
                label="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {months?.map((item) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Year</InputLabel>
              <Select
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {years?.map((item) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-8">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <span className="text-sm">
                  I have read and accept the Terms & Conditions YOKS RENT A CAR
                  third party fleet management services.
                </span>
              }
            />
          </FormGroup>
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

export default NewVehicle;
