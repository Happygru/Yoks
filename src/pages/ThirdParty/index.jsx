import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import ShareCard from "../../components/ShareCard";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";
import AOS from "aos";
import { useEffect } from "react";

const ThirdParty = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="w-full">
        <BreadCrumb title="ThirdParty">
          <Link to="/">Home</Link> - <Link to="#">ThirdParty</Link>
        </BreadCrumb>
      </div>
      <div className="w-full">
        <img
          src="image/services/thirdparty_banner.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-full">
        <div className="w-[90%] m-auto max-w-[1100px] py-8">
          <h1
            className="font-extrabold text-center text-5xl"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Program Overview
          </h1>
          <p
            className="py-6 leading-8 text-lg"
            data-aos="fade-up"
            data-aos-duration="250"
          >
            – Did you know you can make money through sharing your car? The
            amount of money you can make depends on your vehicle size, how long
            it stays within our fleet, how often it’s booked while with YOKS
            Rent A Car. You can make money if your vehicle meets or exceeds our
            minimum requirements and pass our quality assurance inspection. Our
            professional drivers undergo a thorough background check through the
            Ghana police headquarters, thoroughly trained by a DVLA personnel
            for defensive driving & customer service training provided
            frequently in-house. YOKS Rent A Car ensures each driver is assigned
            to a specific vehicle to improve accountability and prevent
            negligence. All vehicles are required to be covered under a
            comprehensive coverage and equipped with a traccar that will help
            monitor driver behavior, vehicle movement and vehicle location at
            all times.
          </p>
        </div>
      </div>
      <div className="w-full relative mb-8">
        <img
          src="image/services/thirdparty_background.png"
          className="w-full h-auto"
          alt=""
        />
        <div className="w-full absolute top-0 flex justify-center">
          <div className="w-[90%] max-w-[1280px] flex justify-end pt-20">
            <div className="w-1/2">
              <p
                className="text-8xl font-bold hidden md:block"
                data-aos="fade-up"
                data-aos-duration="250"
              >
                <span className="text-9xl">B</span>e a partner Today. Earn with
                you car
              </p>
            </div>
          </div>
        </div>
        <img
          src="image/services/thirdparty_car.png"
          alt=""
          className="absolute w-1/2 -bottom-10 right-0 z-20"
          data-aos="fade-left"
          data-aos-duration="350"
        />
      </div>
      <div className="w-full bg-[#f2f2f2]">
        <div className="w-[90%] max-w-[1280px] m-auto rounded-[50px] bg-white p-12 relative z-10 -mt-16">
          <p
            className="pr-6 md:pr-12 lg:pr-20 font-bold text-5xl leading-[60px]"
            data-aos="fade-down"
            data-aos-duration="350"
          >
            <span className="text-8xl">M</span>
            aking passive income with your vehicle has never been easier, while
            using your car to earn money with rideshare or delivery services is
            always an option. With YOKS Rent A Car, your earning potential is
            higher and consistent.
          </p>
        </div>
      </div>
      <div
        className="w-full bg-cover py-40 flex flex-col gap-36 -mt-9 -z-10"
        style={{ backgroundImage: "url('image/thirdparty/additional.png')" }}
      >
        <div className="w-full flex">
          <div className="w-full md:w-3/4 lg:w-7/12">
            <div className="w-full flex justify-center">
              <div
                className="w-[80%] text-center px-12 -ml-[10%] py-8 bg-[var(--main-color2)] rounded-2xl z-10 relative"
                data-aos="fade-right"
                data-aos-duration="250"
              >
                <h3 className="text-2xl font-bold text-white">
                  5 Additional benefits to Car sharing with YOKS
                </h3>
              </div>
            </div>
            <div
              className="m-auto w-full bg-white/80 rounded-r-[40px] -mt-12 py-20 px-14 md:px-24 lg:px-28"
              data-aos="fade-up"
              data-aos-duration="350"
            >
              <div className="w-full max-w-xl">
                <ul className="list-disc text-xl font-bold leading-10 flex flex-col gap-6">
                  <li>
                    Technology is available to help you monitor your vehicle's
                    activities.
                  </li>
                  <li>
                    Transparent processes to help you anticipate monthly profit.
                  </li>
                  <li>
                    Access information on your fingertips with your own user
                    access.
                  </li>
                  <li>
                    Guaranteed payments after the 15th of every month for the
                    previous month's completed transactions.
                  </li>
                  <li>
                    Higher earning potential because YOKS is committed to
                    marketing it's services through a sales team and digital
                    marketing for more reach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full md:w-3/4 lg:w-7/12">
            <div className="w-full flex justify-center">
              <div
                className="w-[80%] text-center px-12 -mr-[10%] py-8 bg-[var(--main-color2)] rounded-2xl z-10 relative"
                data-aos="fade-left"
                data-aos-duration="350"
              >
                <h3 className="text-2xl font-bold text-white">
                  How to make money sharing your vehicle with YOKS
                </h3>
              </div>
            </div>
            <div
              className="m-auto w-full bg-white/80 rounded-l-[40px] -mt-12 py-20 px-14 md:px-24 lg:px-28 flex justify-center"
              data-aos="fade-right"
              data-aos-duration="350"
            >
              <div className="w-full max-w-xl -mr-8">
                <ol className=" list-decimal text-xl font-bold leading-10 flex flex-col gap-6">
                  <li>
                    Create an account by clicking *Sign up* OR *Subscribe*
                  </li>
                  <li>Submit your vehicle sharing details</li>
                  <li>
                    Our team will call you to schedule an inspection at your
                    convenience.
                  </li>
                  <li>
                    Review our terms and conditions after passing inspection.
                  </li>
                  <li>
                    Start making money, set a start date and your vehicle will
                    be activated for business.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f2f2f2]">
        <div className="w-[90%] max-w-[1280px] m-auto flex items-center justify-center flex-col gap-6">
          <div className="w-full gap-10 flex justify-center flex-wrap py-10">
            <ShareCard
              title="Are you an indivisual entrepreneur?"
              text="Bring your car/s to YOKS Rent a Car and start making money right away. Get your car approved and ready, we will handle the rest."
              image="image/services/sharecard2.png"
              data-aos="fade-up"
              data-aos-duration="350"
            />
            <ShareCard
              title="Do you own a rental agency?"
              text="If you have a fleet but not interested on running the Car Rental Business yourself, Subscribe to our business model and let us do the rest. Get your fleet approved and start making money now. We will handle the administrative work and share the profits."
              image="image/services/sharecard1.png"
              data-aos="fade-down"
              data-aos-duration="350"
            />
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div
          className="absolute w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('image/thirdparty/share_car.jpg')" }}
        ></div>
        <div className="py-36 px-8 bg-black/60 relative z-10">
          <div
            className="text-white text-7xl text-center font-extrabold leading-[80px]"
            data-aos="fade-down"
            data-aos-duration="350"
          >
            Who can share their ride with YOKS Rent A Car?
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f2f2f2]">
        <div
          className="w-[90%] max-w-6xl bg-white rounded-[40px] p-14 text-[var(--main-color2)] font-extrabold text-4xl flex flex-col gap-8 items-center m-auto shadow-2xl relative z-10 -mt-8"
          data-aos="fade-up"
          data-aos-duration="350"
        >
          <p>Download Our Teams and Documentation</p>
          <p>Requirements</p>
        </div>
        <div className="w-[90%] max-w-[1280px] m-auto my-6 flex gap-6 justify-center flex-wrap">
          <div className="w-full max-w-sm">
            <RButton isfullwidth={true} style={{ borderRadius: "20px" }}>
              <span className="flex items-center gap-4 px-10 text-lg font-bold uppercase">
                third party vihicle amendment form
                <BsArrowUpRight />
              </span>
            </RButton>
          </div>
          <div className="w-full max-w-sm">
            <RButton isfullwidth={true} style={{ borderRadius: "20px" }}>
              <span className="flex items-center gap-4 px-10 text-lg font-bold uppercase">
                third party vihicle owner agreement
                <BsArrowUpRight />
              </span>
            </RButton>
          </div>
          <div className="w-full max-w-sm">
            <RButton isfullwidth={true} style={{ borderRadius: "20px" }}>
              <span className="flex items-center gap-4 px-10 text-lg font-bold uppercase">
                inspection handover check list
                <BsArrowUpRight />
              </span>
            </RButton>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default ThirdParty;
