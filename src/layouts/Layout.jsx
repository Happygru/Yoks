/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_LOADING } from "../redux/type";
import { getInfoByToken } from "../redux/actions/authAction";

const Layout = () => {
  const isLoading = useSelector((state) => state.global.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    setTimeout(function () {
      dispatch({ type: SET_LOADING, payload: false });
    }, 2000);
    getInfoByToken(dispatch);
  }, []);

  return (
    <>
      <div
        className={`${
          isLoading ? "fixed" : "hidden"
        } transition-all top-0 flex items-center justify-center w-screen h-screen bg-white/90 z-[9999]`}
      >
        <span className="loader"></span>
      </div>
      <ToastContainer />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
