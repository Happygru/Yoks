/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import DashboardMenuItem from "../components/DashboardMenuItem";
import { HiOutlinePresentationChartLine, HiOutlineUsers } from "react-icons/hi";
import { BiSolidCar } from 'react-icons/bi';
import { GiPadlock } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";
import { AiOutlineTransaction } from 'react-icons/ai';
import { SiExpensify } from 'react-icons/si';
import { LOG_OUT, SET_LOADING } from "../redux/type";
import { ToastContainer } from "react-toastify";
import { getInfoByToken } from "../redux/actions/authAction";

const MyAccountLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoading = useSelector((state) => state.global.isLoading);
  const userdata = useSelector((state) => state.auth.user);

  const Logout = () => {
    dispatch({ type: LOG_OUT, payload: null });
  };

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: true });
    getInfoByToken(dispatch, true, navigate);
  }, []);

  return (
    <div className="h-screen w-screen flex">
      <div
        className={`${
          isLoading ? "fixed" : "hidden"
        } transition-all top-0 flex items-center justify-center w-screen h-screen bg-white/90 z-[9999]`}
      >
        <span className="loader"></span>
      </div>
      <div className="h-full w-[250px] bg-[#024273] p-6 overflow-auto">
        <Link to="/" className="w-full">
          <img
            src="image/dashboard_logo.png"
            alt=""
            className="w-3/5 m-auto mt-6"
          />
        </Link>
        <div className="w-full mt-20">
          <p className="text-white font-text">My Account</p>
          <div className="mt-4 w-full flex flex-col gap-1">
            <DashboardMenuItem
              title="Dashboard"
              icon={<HiOutlinePresentationChartLine />}
              isactive={location.pathname === "/dashboard"}
              href="/dashboard"
            />
            <DashboardMenuItem
              title="Edit Profile"
              href="/profile"
              isactive={location.pathname === "/profile"}
              icon={<HiOutlineUsers />}
            />
            <DashboardMenuItem
              title="Change Password"
              href="/change_password"
              isactive={location.pathname === "/change_password"}
              icon={<GiPadlock />}
            />
            <DashboardMenuItem
              title="Manage Vehicles"
              icon={<BiSolidCar />}
              isactive={location.pathname === "/manage_vehicles"}
              href="/manage_vehicles"
            />
          </div>
        </div>
        <div className="w-full mt-2 py-6 border-t border-[rgba(255,255,255,0.4)]">
          <p className="text-white font-text">Booking</p>
          <div className="mt-4 w-full flex flex-col gap-1">
            <DashboardMenuItem
              title="My Booking"
              icon={<HiOutlinePresentationChartLine />}
              href="/mybooking"
              isactive={location.pathname === "/mybooking"}
            />
          </div>
        </div>
        <div className="w-full mt-2 py-6 border-t border-[rgba(255,255,255,0.4)]">
          <p className="text-white font-text">Transactions</p>
          <div className="mt-2 w-full flex flex-col gap-1">
            <DashboardMenuItem
              title="Income"
              icon={<AiOutlineTransaction />}
              href="/income"
              isactive={location.pathname === "/income"}
            />
            <DashboardMenuItem
              title="Expenses"
              icon={<SiExpensify />}
              href="/expenses"
              isactive={location.pathname === "/expenses"}
            />
          </div>
        </div>
        <div className="w-full mt-2 py-6 border-t border-[rgba(255,255,255,0.4)]">
          <div className="w-full flex flex-col gap-1">
            <DashboardMenuItem
              title="Logout"
              icon={<TbLogout />}
              href="/"
              onClick={Logout}
              isactive={true}
            />
          </div>
        </div>
      </div>
      <div className="h-full bg-[#f7f7f7] w-[calc(100%-250px)]">
        <div className="h-[70px] bg-white w-full px-12 flex justify-end items-center">
          <p>{userdata?.name}</p>
        </div>
        <div className="h-[calc(100%-70px)] px-12 overflow-auto w-full">
          <div className="w-full min-h-[calc(100%-70px)]">
            <Outlet />
          </div>
          <div className="h-[70px] w-full flex items-center justify-between">
            <p>&copy; 2023 YOKS-Car-Rental</p>
            <div className="flex gap-8">
              <p>Terms</p>
              <p>Privacy policy</p>
              <p>Legal notice</p>
              <p>Accessibility</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyAccountLayout;
