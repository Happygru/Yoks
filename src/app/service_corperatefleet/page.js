/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import RButton from "@/components/RButton";

const Corperatefleet = () => {
  return (
    <div>
      <div className="w-full">
        <BreadCrumb title="Corperate Fleet Management">
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
          src="image/services/corperatefleet_banner.png"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto py-8">
          <h1 className="text-[44px] text-[var(--text-color)]">
            Corporate Fleet Management
          </h1>
          <p className="text-[var(--text-color)] mt-6 font-text">
            Over the years we have built the technical capacity and managerial
            competencies in fleet management, and this is what we seek to put at
            the disposal of your organization to assist in delivering its brand
            promise to its cherished clients. Through this service channel YOKS
            will provide you with vehicles of your choice on operating lease
            basis which would be replaced every 48 months. The employees of your
            organization would be given the first right of refusal to purchase
            them at a residual value subsidized price. This, we have realized,
            has been an incentive to the employees of our corporate clients
            yielding several benefits to our clients.
          </p>
          <p className="text-[var(--text-color)] mt-6">
            We understand the challenges faced by companies in managing their
            fleet of vehicles. From vehicle maintenance to tracking expenses, it
            can be a complex and time-consuming task. That&apos;s where we come
            in. Our goal is to provide efficient and cost-effective solutions to
            help companies manage their fleet with ease.
          </p>
          <img
            src="image/services/corperatefleet_thumbnail1.svg"
            className="w-full mt-6"
            alt=""
          />
          <h1 className="text-[44px] text-[var(--text-color)] mt-6 font-semibold">
            Our Services:
          </h1>
          <div className="text-[var(--text-color)]">
            <ul className="list-disc pl-7 font-text">
              <li>
                Vehicle Maintenance: We handle all the maintenance needs of your
                vehicles, from regular check-ups to emergency repairs. Our team
                of experts ensures that your vehicles are always in top
                condition, keeping you on the road and saving you time and
                money.
              </li>
              <li>
                Fleet Tracking: With real-time GPS tracking, our system provides
                detailed information on the location, speed and status of your
                vehicles, helping you keep track of your fleet and make informed
                decisions.
              </li>
              <li>
                Fuel Management: Our fuel management system helps you track fuel
                consumption and expenses, ensuring that your fleet is running
                efficiently and cost-effectively.
              </li>
              <li>
                Driver Management: Our driver management system provides you
                with a comprehensive overview of your drivers&apos; activities,
                including hours worked, distance travelled and fuel consumption.
              </li>
              <li>
                Compliance Management: We help ensure that your fleet is always
                compliant with local regulations, providing you with peace of
                mind and avoiding costly fines.
              </li>
            </ul>
          </div>
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
    </div>
  );
};

export default Corperatefleet;
