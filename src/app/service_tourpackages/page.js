/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import RButton from "@/components/RButton";
import { FaPlay } from "react-icons/fa";

const TourPackages = () => {
  return (
    <div>
      <div className="w-full">
        <BreadCrumb title="Tour Packages">
          <Link href="/">Home</Link> - <Link href="#">Services</Link>
        </BreadCrumb>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="max-w-[1280px] w-[90%] h-full relative m-auto">
            <div className="absolute right-0 top-4 w-max h-max">
              {/* <RButton isradius={true}>
                <span className="flex items-center gap-4 px-10">
                  <FaPlay />
                  Book Now
                </span>
              </RButton> */}
            </div>
          </div>
        </div>
        <img
          src="image/services/tourpackages_banner.svg"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto py-16">
          <h1 className="text-[44px] text-[var(--text-color)] font-semibold">
            Welcome to Our Tour Packages Add-On
          </h1>
          <p className="text-[var(--text-color)] mt-6 font-text">
            Enhance your vehicle booking experience with our tour packages.
            Explore new destinations, experience local culture and create
            unforgettable memories with ease and comfort. Whether you are a solo
            traveler, a couple, or a group, our tour packages have something for
            everyone.
          </p>
          <h2 className="text-2xl font-semibold mt-7">
            Why Choose Our Tour Packages?
          </h2>
          <div className="flex flex-col gap-4 mt-8 text-base font-text">
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>
                Convenient and Stress-Free: Our tour packages are designed to
                take care of all the details, so you can sit back, relax, and
                enjoy your trip without worrying about the logistics
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>
                Affordable and Flexible: We offer a wide range of tour packages
                to fit any budget, and you can easily customize your itinerary
                to meet your specific needs.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>
                experienced Guides: Our local guides are knowledgeable,
                friendly, and passionate about sharing their culture and
                heritage with you. They will provide you with a unique and
                authentic experience
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>
                High-Quality vehicles: Our tour packages include a comfortable
                and well-maintained cehicle with a professional driver, so you
                can travle in style and comfort.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>
                Wide Range of Destinations: From breathtaking natural landscapes
                to bustling cities, we offer your packages to a variety of
                destinations, both near and far.
              </p>
            </div>
          </div>
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="col-span-1">
              <img
                src="image/services/tourpackages_thumbnail1.svg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="image/services/tourpackages_thumbnail2.svg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="image/services/tourpackages_thumbnail3.png"
                className="w-full"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="image/services/tourpackages_thumbnail4.png"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
