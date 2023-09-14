import { useEffect, useState, useMemo } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector, useDispatch } from "react-redux";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";
import { toast } from "react-toastify";
import { toast_options, isEmail } from "../../utils/constants";

import countryList from "react-select-country-list";
import { saveProfile } from "../../redux/actions/myaccountAction";
import { SET_LOADING } from "../../redux/type";

const Profile = () => {
  const dispatch = useDispatch();

  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const userdata = useSelector((state) => state.auth.user);

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

  const countries = useMemo(() => countryList().getData(), []);

  useEffect(() => initialize(userdata), [userdata]);

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

  const initialize = (info) => {
    let newPhone = info?.phone.replace(/\+/g, "");

    setName(info?.name);
    setGender(info?.gender);
    setDay(parseInt(info?.dob.split("-")[2]));
    setMonth(parseInt(info?.dob.split("-")[1]));
    setYear(parseInt(info?.dob.split("-")[0]));
    setEmail(info?.email);
    setPhone(newPhone);
    setCity(info?.city);
    setCountry(info?.country);
  };

  const updateProfile = () => {
    if (name === "") {
      toast.warn("Incorrect your name", toast_options);
      return;
    }

    if (!(day && month && year)) {
      toast.warn("Incorrect your birthday", toast_options);
      return;
    }

    if (!isEmail(email)) {
      toast.warn("Incorrect your email format", toast_options);
      return;
    }

    if (phone.length < 1) {
      toast.warn("Please input your phonenumber", toast_options);
      return;
    }

    if (city === "") {
      toast.warn("Incorrect your city", toast_options);
      return;
    }
    let formData = new FormData();
    if (userdata?.ctype === "Individual") {
      const postData = {
        name,
        gender,
        dob: `${year}-${month}-${day}`,
        city,
        country,
        phone: `+${phone}`,
        email,
        account_type: "Individual",
      };

      for (let key in postData) {
        formData.append(key, postData[key]);
      }
    } else {
      const postData = {
        company_name: name,
        city,
        country: country,
        phone: `+${phone}`,
        email,
        account_type: "Corporate",
      };

      for (let key in postData) {
        formData.append(key, postData[key]);
      }
    }
    dispatch({ type: SET_LOADING, payload: true });
    saveProfile(dispatch, formData, userdata?.ctype);
  };

  return (
    <>
      {userdata?.ctype === "Individual" ? (
        <div className="w-full py-6 flex flex-col gap-2">
          <p className="font-bold text-xl">Edit Profile</p>
          <p className="font-text text-sm">Dashboard - Edit Profile</p>
        </div>
      ) : (
        <div className="w-full py-6 flex flex-col gap-2">
          <p className="font-bold text-xl">Edit Company Information</p>
          <p className="font-text text-sm">
            Dashboard - Edit Company Information
          </p>
        </div>
      )}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="py-12 px-8 w-full bg-white rounded-sm shadow-sm">
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-1">
                <TextField
                  fullWidth
                  label={`${
                    userdata?.ctype === "Individual" ? "Name" : "Company Name"
                  }`}
                  variant="outlined"
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {userdata?.ctype === "Individual" ? (
                <>
                  <div className="col-span-1">
                    <FormControl fullWidth size="small">
                      <InputLabel>Gender</InputLabel>
                      <Select
                        label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-span-1 flex gap-4 flex-nowrap">
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
                </>
              ) : (
                <></>
              )}
              <div className="col-span-1">
                <TextField
                  fullWidth
                  label={`${
                    userdata?.ctype !== "Individual" ? "Company" : ""
                  } Email`}
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <PhoneInput
                  value={phone}
                  onChange={setPhone}
                  country={"gn"}
                  placeholder="Enter Phone Number"
                  className="h-[40px]"
                  inputClass="!h-[40px] !w-full"
                />
              </div>
              <div className="col-span-1">
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  size="small"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <FormControl fullWidth size="small">
                  <InputLabel>Country</InputLabel>
                  <Select
                    label="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countries?.map((item) => (
                      <MenuItem value={item.value}>{item.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col-span-1">
                <RButton
                  isradius={true}
                  style={{ backgroundColor: "rgba(237,139,0,0.9)" }}
                  onClick={updateProfile}
                >
                  <span className="flex w-full justify-center items-center gap-2 px-10 font-normal">
                    Update{" "}
                    {userdata?.ctype === "Individual"
                      ? "Profile"
                      : "Information"}
                    <BsArrowUpRight className="font-bold" />
                  </span>
                </RButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
