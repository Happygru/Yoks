import React, { useState } from "react";
import { Link } from 'react-router-dom';
import RButton from "../components/RButton";
import { BsTelephone, BsList } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-[100px] bg-[var(--main-color1)] py-4">
      <div className="max-w-[1280px] w-[90%] m-auto h-full flex items-center justify-between">
        <Link to="/" className="w-max">
          <img src="image/logo.svg" alt="Logo" className="h-full" />
        </Link>
        <nav className="hidden gap-4 text-base font-semibold text-white lg:flex">
          <Link to="/" className="cursor-pointer nav_item">
            Home
          </Link>
          <div className="dropdown">
            <button className="dropbtn cursor-pointer nav_item">
              About Us
            </button>
            <div className="dropdown-content">
              <Link to="/aboutus">About Us</Link>
              <Link to="/teams">Our Team</Link>
            </div>
          </div>
          <Link to="/" className="cursor-pointer nav_item">
            Our Fleet
          </Link>
          <Link to="/services" className="cursor-pointer nav_item">
            Services
          </Link>
          <Link to="/" className="cursor-pointer nav_item">
            Promo
          </Link>
          <Link to="/contactus" className="cursor-pointer nav_item">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden gap-3 md:flex">
            <span className="flex items-center text-sm font-semibold text-white">
              <BsTelephone /> + 233 540-614-545
            </span>
            <span className="flex items-center text-sm text-white">
              <TbWorld />
              EN
            </span>
          </div>
          <RButton isfullradius={true} istransparent={true}>
            <Link to="/signin">SignIn</Link>
          </RButton>
          <RButton isfullradius={true} istransparent={false}>
            <Link to="/signup">SignUp</Link>
          </RButton>
          <span
            className="block text-3xl font-bold text-white cursor-pointer md:hidden"
            onClick={toggleDrawer}
          >
            <BsList />
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla"
      >
        <div className="w-full h-full pt-10 bg-[#FDEEEC] relative">
          <img src="image/logo.svg" className="w-48 m-auto" alt="" />
          <nav className="flex flex-col gap-6 text-base font-semibold text-[var(--text-color)] pl-8 pt-8">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="#" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/aboutus" className="cursor-pointer pl-4">
              About Us
            </Link>
            <Link to="/teams" className="cursor-pointer pl-4">
              Our Team
            </Link>
            <Link to="/ourfleet" className="cursor-pointer">
              Our Fleet
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/" className="cursor-pointer">
              Promo
            </Link>
            <Link to="/contactus" className="cursor-pointer">
              Contact
            </Link>
          </nav>
          <span className="absolute flex items-center text-sm font-semibold text-[var(--text-color)] bottom-4 pl-8">
            <BsTelephone /> + 233 540-614-545
          </span>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;