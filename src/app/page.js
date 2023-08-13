"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import RButton from "@/components/RButton";
import { BsArrowUpRight } from "react-icons/bs";
import ValuesCard from "@/components/ValuesCard";
import FleetCard from "@/components/FleetCard";
import SlideCard from "@/components/SlideCard";
import "aos/dist/aos.css";
import axios from "axios";

const Home = () => {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    AOS.init();
    getFleetData();
  }, []);

  const getFleetData = () => {
    axios
      .get("https://fms.yoksghana.com/api/web/v1/FleetRestController/fleet")
      .then((res) => {
        const { categories, vehicles } = res.data;

        const result = categories.slice(0, 3).map((category) => ({
          ...category,
          vehicles: vehicles.filter(
            (vehicle) => vehicle.category === category.id
          ),
        }));
        setCarList(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-0 z-10 w-full h-full bg-black/30">
          <div className="max-w-[1280px] w-[90%] h-full m-auto grid grid-rows-2 relative">
            <div className="row-span-1 hidden md:block">
              <div className="flex items-center justify-end w-full h-full">
                {/* <RButton isradius={true} data-aos="fade-down">
                  <span className="flex items-center gap-4 px-10">
                    <FaPlay />
                    Book Now
                  </span>
                </RButton> */}
              </div>
            </div>
            <div className="row-span-2 md:row-span-1 flex md:block items-center">
              <p
                className="text-white font-bold text-[26px] md:text-[38px] lg:text-[46px] xl:text-[52px] w-full md:w-2/3"
                data-aos="fade-up"
              >
                We are your Reliable Choice for Safety and Comfort on the Road
              </p>
            </div>
          </div>
        </div>
        <img src="image/home/banner.png" alt="home_banner" className="w-full" />
      </div>
      <div className="w-full bg-[#FDEEEC] py-8">
        <div className="max-w-[1280px] w-[90%] m-auto flex items-center flex-col gap-20">
          <h1 className="text-[50px] font-bold">Our Core Values</h1>
          <div className="flex flex-wrap justify-center w-full gap-6 md:flex-nowrap">
            <ValuesCard
              icon="safetyFirst.svg"
              title="Safety First"
              text="We make an extra effort to ensure that safety standard are at their highest peak  and adhered to at all times."
              data-aos="fade-up"
              data-aos-duration="150"
            />
            <ValuesCard
              icon="integrity.svg"
              title="Integrity"
              text="We are respectful and responsible for following through on our commitments to clients and other stakeholders."
              data-aos="fade-up"
              data-aos-duration="250"
            />
            <ValuesCard
              icon="accountability.svg"
              title="Accountability"
              text="We demand accountability in every aspect of our business from all our staff."
              data-aos="fade-up"
              data-aos-duration="350"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-8">
        <div className="max-w-[1280px] w-[90%] m-auto flex flex-col gap-20">
          <div className="flex justify-between w-full">
            <h1 className="text-4xl font-bold text-[var(--text-color)]">
              Our Fleet
            </h1>
            <span className="flex items-center gap-2">
              <Link
                href="#"
                className="text-base text-[var(--main-color2)] font-bold"
              >
                More Fleet
              </Link>
              <BsArrowUpRight className="text-base text-[var(--text-color)] font-bold" />
            </span>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-6 xl:flex-nowrap items-stretch">
            {carList.length > 0 ? (
              carList.map((item, index) => (
                <FleetCard
                  title={item.name}
                  description={item.description}
                  passengers={item.vehicles.passengers}
                  doors={item.vehicles.doors}
                  luggage={item.vehicles.suitcases}
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="150"
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="image/home/service_car.svg" alt="" />
      </div>
      <div className="w-full bg-[#FDEEEC] pt-[60px] pb-7 mt-[-20px]">
        <div className="max-w-[1280px] w-[90%] m-auto flex flex-col gap-8">
          <div className="flex justify-between w-full">
            <h1 className="text-4xl font-bold text-[var(--text-color)]">
              Our Services
            </h1>
            <span className="flex items-center gap-2">
              <Link
                href="#"
                className="text-base text-[var(--main-color2)] font-bold"
              >
                More Services
              </Link>
              <BsArrowUpRight className="text-base text-[var(--text-color)] font-bold" />
            </span>
          </div>
          <div
            className="w-full text-xl text-center md:text-3xl"
            data-aos="fade-up"
            data-aos-duration="150"
          >
            <p className="font-text">
              YOKS RENT - A - CAR&apos;s VALUE PROPOSITION is to provide
              solutions in transportation, by providing clients with the desired
              options of services and vehicles, to managing to client&apos;s
              transportation and logistics needs.
            </p>
            <p className="font-text">
              YOKS offers clients and customers a range of services cantered
              around providing transportation management solutions in the areas
              of:
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <img src="image/home/airportpickup.png" className="w-full" alt="" />
        </div>
        <div className="col-span-1 p-24 flex justify-center flex-col">
          <h1 className="text-[44px] font-semibold">Airport Pickup</h1>
          <p className="my-8 font-text">
            Our airport shuttle service provides a convenient and stress-free
            way to get to and from the airport. We offer pick-up and drop-off
            services from all major airports, including JFK, LaGuardia, and
            Newark Liberty International.
          </p>
          <RButton isradius={true}>
            <Link href="/service_shuttle" className="w-full">
              <p className="flex items-center gap-4">
                <span className="text-base">More Detail</span>
                <BsArrowUpRight />
              </p>
            </Link>
          </RButton>
        </div>
      </div>
      <div
        className="w-full h-max lg:h-[275px] overflow-hidden relative"
        style={{
          backgroundImage: "url('image/home/number_back.svg')",
        }}
      >
        <div className="max-w-[1280px] w-[90%] h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center m-auto py-2">
          <div
            className=" text-white flex flex-wrap gap-2 md:block text-[28px] md:text-[35px] lg:text-[40px] font-semibold col-span-1"
            data-aos="fade-right"
          >
            <p>Showcase some</p>
            <p>impressive numbers.</p>
          </div>
          <div
            className="flex items-center justify-between col-span-1"
            data-aos="fade-left"
          >
            <div className="text-center text-white">
              <p className="text-[40px] font-semibold leading-tight">285</p>
              <p>vehicles</p>
            </div>
            <div className="text-center text-white">
              <p className="text-[40px] font-semibold leading-tight">200,000</p>
              <p>Miles</p>
            </div>
            <div className="text-center text-white">
              <p className="text-[40px] font-semibold leading-tight">13K</p>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-center text-[var(--text-color)] text-[40px] mt-5 font-semibold">
          Discover Ghana with YOKS
        </h1>
        <div className="max-w-[1280px] w-[90%] grid sm:grid-cols-2 lg:grid-cols-4 gap-8 m-auto mt-6">
          <div className="col-span-1 flex flex-col gap-4 items-center">
            <img
              src="image/services/tourpackages_thumbnail1.svg"
              className="rounded-md"
              alt=""
            />
            <p className="font-text">Elmina</p>
          </div>
          <div className="col-span-1 flex flex-col gap-4 items-center">
            <img
              src="image/services/tourpackages_thumbnail2.svg"
              className="rounded-md"
              alt=""
            />
            <p className="font-text">Larabanga mosque</p>
          </div>
          <div className="col-span-1 flex flex-col gap-4 items-center">
            <img
              src="image/services/tourpackages_thumbnail3.png"
              className="rounded-md"
              alt=""
            />
            <p className="font-text">Axim</p>
          </div>
          <div className="col-span-1 flex flex-col gap-4 items-center">
            <img
              src="image/services/tourpackages_thumbnail4.png"
              className="rounded-md"
              alt=""
            />
            <p className="font-text">Aburi botanical garden</p>
          </div>
        </div>
        <img src="image/home/discover_yoks.svg" alt="" className="w-full" />
        <h1 className="text-center text-[var(--text-color)] text-[40px] mt-5 font-semibold">
          We make sure that your every trip is comfortable
        </h1>
        <div className="w-[90%] max-w-[1280px] m-auto grid grid-cols-3 mt-20 gap-20 mb-20">
          <div
            className="flex flex-col items-center justify-center col-span-1 gap-4"
            data-aos="fade-up"
            data-duration="150"
          >
            <img
              src="image/home/accountability.svg"
              alt=""
              className="h-[50px]"
            />
            <div className="text-[var(--text-color)]">
              <p>Luxury fleet</p>
              <p>Selection</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center col-span-1 gap-4"
            data-aos="fade-up"
            data-duration="200"
          >
            <img src="image/home/phone.svg" alt="" className="h-[50px]" />
            <div className="text-[var(--text-color)]">
              <p>24/7 Order</p>
              <p>Available</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center col-span-1 gap-4"
            data-aos="fade-up"
            data-duration="250"
          >
            <img src="image/home/driver.svg" alt="" className="h-[50px]" />
            <div className="text-[var(--text-color)]">
              <p>Professional</p>
              <p>Car Drivers</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center col-span-1 gap-4"
            data-aos="fade-up"
            data-duration="300"
          >
            <img src="image/home/safetyFirst.svg" alt="" className="h-[50px]" />
            <div className="text-[var(--text-color)]">
              <p>Safe Drive</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center col-span-1 gap-4"
            data-aos="fade-up"
            data-duration="350"
          >
            <img src="image/home/integrity.svg" alt="" className="h-[50px]" />
            <div className="text-[var(--text-color)]">
              <p>Competitive Price</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FDEEEC] py-16">
        <div className="w-[90%] max-w-[1280px] m-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-36">
          <div
            className="flex flex-col items-start justify-start col-span-1 gap-6"
            data-aos="fade-up"
            data-duration="200"
          >
            <p className="text-[40px] font-semibold font-text">
              Hear what our amazing customers say
            </p>
            <p>
              Feel free to leave us a review we will be glad to hear about your
              experience with us
            </p>
            <RButton isradius={true}>
              <p className="flex items-center gap-4">
                <span>Get Started</span>
                <BsArrowUpRight />
              </p>
            </RButton>
          </div>
          <div
            className="flex flex-col col-span-1 gap-8"
            data-aos="fade-down"
            data-duration="200"
          >
            <div className="w-full">
              <SlideCard />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full"
          alt=""
          src="image/home/footer_illustration.svg"
        />
      </div>
    </>
  );
};

export default Home;
