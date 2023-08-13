/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import RButton from "@/components/RButton";
import { FaPlay } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const serviceChauffaeur = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Self Drive Options">
          <Link href="/">Home</Link> - <Link href="#">Services</Link>
        </BreadCrumb>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="max-w-[1280px] w-[90%] h-full relative m-auto"></div>
        </div>
        <img
          src="image/services/selfdrive_banner.png"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full py-8">
        <div className="max-w-[1280px] w-[90%] m-auto">
          <h1 className="text-[44px] font-semibold">Self-Drive options</h1>
          <p className="mt-8 text-base">
            This service is the self-drive car rental option of YOKS. This is a
            great alternative for the client familiar with the driving
            conditions and terrain of Accra and Ghana while driving any Vehicle
            of choice within Ghana. Terms & Conditions apply.
          </p>
          <div className="flex flex-col gap-4 mt-8 text-base">
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>100% Luxurious Fleet</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>All our Fleet Are Fully Valeted & Serviced</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>A Safe & Secure Journey</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>Comfortable and Enjoyable</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>Clean, Polite & Knowledge</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-8">
        <div className="max-w-[1280px] w-[90%] m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="cols-span-1">
              <img
                src="image/services/selfdrive_thumbnail1.svg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="cols-span-1 flex flex-col justify-center items-center">
              <h1 className="text-[44px] font-semibold">
                Enjoy the ride with your love one’s
              </h1>
              <p className="text-[var(--text-color)]">
                Choose from our wide variety of rides and take that road trip
                you have always been wanting to take with your love once.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse mt-6 md:mt-0 md:grid grid-cols-2 gap-16">
            <div className="cols-span-1 flex flex-col justify-center items-center">
              <h1 className="text-[44px] font-semibold">
                Want a ride around the city?
              </h1>
              <p className="text-[var(--text-color)]">
                Yoks got you covered we have all the vehicle types you need to
                experience Ghana.
              </p>
            </div>
            <div className="cols-span-1">
              <img
                src="image/services/selfdrive_thumbnail2.svg"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="image/home/footer_illustration.svg"
          alt=""
          className="w-full"
        />
      </div>
    </>
  );
};

export default serviceChauffaeur;
