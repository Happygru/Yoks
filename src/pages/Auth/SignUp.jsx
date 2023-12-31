import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";
import Select from "react-select";
import countryList from "react-select-country-list";
import styled from "styled-components";
import { toast } from "react-toastify";
import {
  toast_options,
  isEmail,
  validatePassword,
} from "../../utils/constants";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { signUp } from "../../redux/actions/authAction";
import { SET_LOADING } from "../../redux/type";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const MSelect = styled(Select)`
    height: 53px;
    width: 100%;
    & > div:first-of-type {
      height: 100%;
      width: 100%;
      background-color: #f6f6f6;
      border: none;
    }
  `;

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

  const [country, setCountry] = useState("");
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [accountType, setAccountType] = useState({
    label: "Individual",
    value: "Individual",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState({ label: "Male", value: "Male" });
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (month && year) {
      const newDaysInMonth = new Date(year.value, month.value, 0).getDate();
      const days = Array.from({ length: newDaysInMonth }, (_, i) => ({
        label: i + 1,
        value: i + 1,
      }));
      setDaysInMonth(days);

      if (day.label > newDaysInMonth) {
        setDay(days[days.length - 1]);
      }
    }
  }, [month, year, day]);

  // const onSignUp = () => {};

  const onSignUp = () => {
    if (firstName === "") {
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

    if (password.length < 1) {
      toast.warn("Please input your password", toast_options);
      return;
    }

    if (!validatePassword(password)) {
      toast.info(
        <>
          <b>Password must:</b>
          <ul>
            <li>Be between 9 and 64 characters</li>
            <li>
              <p>Include at least two of the following</p>
              <ul className="pl-2">
                <li>- An uppercase character</li>
                <li>- A lowercase character</li>
                <li>- A number</li>
                <li>- A special character</li>
              </ul>
            </li>
          </ul>
        </>,
        { ...toast_options, autoClose: 10000 }
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.warn("Incorrect your password", toast_options);
      return;
    }

    let postData;
    if (accountType.value === "Individual") {
      postData = {
        individual_name: `${firstName} ${lastName}`,
        gender: gender.value,
        dob: `${year.value}-${month.value}-${day.value}`,
        city,
        country: country.value,
        phone,
        account_type: accountType.value,
        email,
        password,
      };
    } else {
      postData = {
        company_name: `${firstName}`,
        city,
        country: country.value,
        phone,
        account_type: accountType.value,
        email,
        password,
      };
    }
    dispatch({ type: SET_LOADING, payload: true });
    signUp(dispatch, postData, accountType.value, navigate);
  };

  const MaterialUISwitch = styled(Switch)(() => ({
    width: 80,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(0px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(25px)",
        "& .MuiSwitch-thumb:before": {
          content: "'T'",
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "'C'",
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div className="w-full">
      <div className="py-24 max-w-[1280px] w-[90%] m-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 sm:min-w-[640px] bg-transparent z-40">
            <h1 className="text-4xl font-bold text-center">Create Account</h1>
            <p className="text-md py-4 font-text text-center">
              Signup for an Account
            </p>
            <div className=" w-max m-auto flex items-center">
              <div className="text-lg pr-3 w-44 text-right font-bold">
                Customer
              </div>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
              <div className="text-lg w-44 font-bold">Thirdparty User</div>
            </div>
            <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1">
                <input
                  type="text"
                  className="y_input font-text"
                  placeholder={`${
                    accountType.value === "Individual"
                      ? "First Name"
                      : "Company Name"
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              {accountType.value === "Individual" ? (
                <>
                  <div className="col-span-1">
                    <input
                      type="text"
                      className="y_input font-text"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <MSelect
                      options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                      ]}
                      value={gender}
                      onChange={setGender}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              {accountType.value === "Individual" ? (
                <div className="col-span-1 flex gap-4 flex-nowrap">
                  <MSelect
                    options={daysInMonth}
                    placeholder="Day"
                    isSearchable
                    value={day}
                    onChange={setDay}
                  />
                  <MSelect
                    options={months}
                    placeholder="Month"
                    isSearchable
                    value={month}
                    onChange={setMonth}
                  />
                  <MSelect
                    options={years}
                    placeholder="Year"
                    isSearchable
                    value={year}
                    onChange={setYear}
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="col-span-1">
                <input
                  type="text"
                  className="y_input font-text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
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
                <MSelect
                  className="font-text"
                  options={countries}
                  value={country}
                  isSearchable
                  onChange={setCountry}
                  placeholder="Country"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  className="y_input font-text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <MSelect
                  options={[
                    { label: "Individual", value: "Individual" },
                    { label: "Corporate", value: "Corporate" },
                  ]}
                  value={accountType}
                  onChange={setAccountType}
                />
              </div>
              <div className="col-span-1">
                <input
                  type="password"
                  className={`y_input font-text ${
                    (password !== confirmPassword ||
                      !validatePassword(password)) &&
                    password.length > 0
                      ? "border border-red-600"
                      : ""
                  }`}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <input
                  type="password"
                  className={`y_input font-text ${
                    password !== confirmPassword ? "border border-red-600" : ""
                  }`}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="col-span-1 mt-4 text-center flex flex-col gap-4">
                <RButton isradius={true} isfullwidth={true} onClick={onSignUp}>
                  <span className="flex w-full justify-center items-center gap-2 px-10">
                    Create Account <BsArrowUpRight className="font-bold" />
                  </span>
                </RButton>
                <p className="font-text">
                  Already a member?{" "}
                  <Link to="/signin" className="text-[#024273]">
                    Login.
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-6 flex items-center justify-center">
            <img
              src="image/auth/signup_back.png"
              alt="signup_back"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default SignUp;
