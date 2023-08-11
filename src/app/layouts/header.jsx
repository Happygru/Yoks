"use client";

import Link from "next/link";

import React, { useState } from "react";
import RButton from "@/components/RButton";
import { BsTelephone, BsList } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full h-[100px] bg-[var(--main-color1)] py-4">
      <div className="max-w-[1280px] w-[90%] m-auto h-full flex items-center justify-between">
        <img src="image/logo.svg" alt="Logo" className="h-full" />
        <nav className="hidden gap-4 text-base font-semibold text-white lg:flex">
          <Link href="/home" className="cursor-pointer">
            Home
          </Link>
          <Link href="/home" className="cursor-pointer">
            About US
          </Link>
          <Link href="/home" className="cursor-pointer">
            Our Fleet
          </Link>
          <Link href="/home" className="cursor-pointer">
            Services
          </Link>
          <Link href="/home" className="cursor-pointer">
            Promo
          </Link>
          <Link href="/home" className="cursor-pointer">
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
            SignIn
          </RButton>
          <RButton isfullradius={true} istransparent={false}>
            SignUp
          </RButton>
          <span className="text-3xl font-bold text-white cursor-pointer">
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
        <div>Hello World</div>
      </Drawer>
    </div>
  );
};

export default Header;
