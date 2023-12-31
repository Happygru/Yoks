import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { TbClockHour9 } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import RButton from "../components/RButton";
import AppleButton from "../components/AppleButton";
import GooglePlayButton from "../components/GooglePlayButton";

const Footer = () => {
  return (
    <div
      className="relative w-full py-8 overflow-hidden h-max"
      style={{
        backgroundImage: "url('image/footer_background.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1280px] w-[90%] m-auto">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="relative col-span-1">
            <img src="image/logo.svg" alt="" className="w-9/12" />
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4">
            <div className="w-5/6 m-auto">
              <p className="text-white text-[40px] font-semibold">
                Download the app
              </p>
              <p className="text-lg text-white text-semibold font-text">
                Have a personal driver at your fingertips no matter where you
                are with our easy-to-use smartphone app. Coming Soon
              </p>
              <div className="flex flex-wrap justify-between w-full gap-8 mt-6 xl:flex-nowrap">
                <AppleButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full mt-4">
          <div className="flex flex-col gap-4">
            <p className="text-white text-[40px] font-semibold">Contact Us</p>
            <p className="text-lg text-white text-semibold font-text">
              For inquiries, please get in touch with us and our staff will be
              glad to assist you
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-20 mt-6 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start col-span-1 gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-center text-white opacity-60 lg:text-left">
                Head Office
              </p>
              <div className="flex justify-center w-full gap-4 text-lg text-white">
                <SlLocationPin className="mt-1 text-xl" />
                <div className="font-text">
                  PMB 72 Osu-Re Accra, Asafoatse Tempong
                  <p className="font-text">Street Osu Re Near Tigo Office</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center  lg:justify-start w-full gap-4 text-lg text-white">
              <LuPhone className="mt-1 text-xl" />
              <div className="font-text">
                Tel: +233 596-911-066 ǀ Hotlines +233 540-614-545
                <p className="font-text">+233 243-600-277 +233 243-300-493</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start col-span-1 gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-center text-white opacity-60 lg:text-left">
                Movenpick Ambassador Hotel Accra, Ghana (Transport Desk)
              </p>
              <div className="flex justify-center  lg:justify-start w-full gap-4 text-lg text-white">
                <SlLocationPin className="mt-1 text-xl" />
                <div className="font-text">
                  PMB CT 343, Independence Ave,{" "}
                  <p className="font-text">Accra Ghana</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center  lg:justify-start w-full gap-4 text-lg text-white">
              <LuPhone className="mt-1 text-xl" />
              <div className="font-text">
                Hotlines +233 540-614-545 ǀ +233 243-600-277
                <p className="font-text">+233 243-300-493</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-white opacity-60">
              Working Hours
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-white">
              <TbClockHour9 className="text-xl" />
              <p>24/7 Service</p>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col items-center justify-between w-full gap-8 py-4 font-semibold text-white lg:gap-2 lg:flex-row">
          <p>© 2023 YOKS RENT-A-CAR</p>
          <div className="flex gap-4">
            <Link to="/terms">Terms & Condition</Link>
            <Link to="#">FAQ</Link>
          </div>
          <div className="flex gap-4">
            <RButton isfullradius={true} istransparent={true}>
              <span className="flex items-center gap-4 font-semibold">
                <SlLocationPin />
                Accra
              </span>
            </RButton>
            <RButton isfullradius={true} istransparent={false}>
              <span className="flex items-center gap-4 font-semibold">
                <GiWorld />
                English
              </span>
            </RButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;