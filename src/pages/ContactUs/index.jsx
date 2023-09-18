"use client";

import { SlPhone, SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const ContactUs = () => {
  return (
    <>
      <div className="w-full bg-[var(--main-color2)] relative">
        <div className="max-w-[1280px] w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-16">
          <div className="flex flex-col col-span-1 gap-6 py-8">
            <div className="flex items-start gap-4 font-semibold text-white">
              <div className="p-3 rounded-full bg-white/20">
                <SlLocationPin className="text-xl" />
              </div>
              <div className="flex flex-col gap-2 text-lg">
                <p>Location</p>
                <p>
                  PMB 72 Osu-Re Accra, Asafoatse Tempong Street Osu Re Near Tigo
                  Office
                </p>
                <p>PMB CT 343, Independence Ave, Accra Ghana</p>
              </div>
            </div>
            <div className="flex items-start gap-4 font-semibold text-white">
              <div className="p-3 rounded-full bg-white/20">
                <SlPhone className="text-xl" />
              </div>
              <div className="flex flex-col gap-2 text-lg">
                <p>Phone</p>
                <p>
                  Tel: +233 596-911-066 ǀ Hotlines +233 540-614-545 +233
                  243-600-277 +233 243-300-493
                </p>
                <p>
                  Tel: +233 596-911-066 ǀ Hotlines +233 540-614-545 +233
                  243-600-277 +233 243-300-493
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 font-semibold text-white">
              <div className="p-3 rounded-full bg-white/20">
                <GoMail className="text-xl" />
              </div>
              <div className="flex flex-col gap-2 text-lg">
                <p>Email</p>
                <p>info@yoksghana.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="image/contactus/map.svg"
          className="w-full lg:w-5/12 lg:absolute right-0 top-0"
          alt=""
        /> */}
        <iframe className="w-full lg:w-5/12 lg:absolute right-0 top-0 border-none" title="1" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYzOzT3-Q3w8RkwzmPAWSSRA&key=AIzaSyAkLkPkOLNYLZ0KffUPCNP3Fd0ZkuP3AVU"></iframe>
      </div>
      <div className="w-full py-12 md:pt-[15%]">
        <div className="max-w-[1280px] w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col col-span-1 gap-6">
            <h1 className="text-[44px] font-semibold">Contact Us</h1>
            <CssTextField label="Full Name" size="small" className="w-full" />
            <CssTextField label="Email" size="small" className="w-full" />
            <CssTextField label="Subject" size="small" className="w-full" />
            <CssTextField
              label="Message"
              multiline
              rows={5}
              size="small"
              className="w-full"
            />
            <RButton isradius={true}>
              <span className="flex items-center gap-2">
                Get In Touch
                <BsArrowUpRight />
              </span>
            </RButton>
          </div>
          <div className="col-span-1">
            <img
              src="image/contactus/contactus_back.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
