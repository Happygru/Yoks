import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

const ServiceEventticketing = () => {
  return (
    <div>
      <div className="w-full">
        <BreadCrumb title="Event Ticketing">
          <Link to="/">Home</Link> - <Link to="#">Services</Link>
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
          src="image/services/eventticketing_banner.svg"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto py-16">
          <h1 className="text-[44px] text-[var(--text-color)] font-semibold">
            Welcome to the Event Ticketing Services
          </h1>
          <p className="text-[var(--text-color)] mt-6 font-text">
            Our event ticketing services offer a convenient and hassle-free way
            to book your tickets for all types of events. Whether it&apos;s a
            music festival, sports event, or theater performance, we have you
            covered. Our platform provides a one-stop-shop for all your
            ticketing needs, so you can focus on enjoying the event.
          </p>
          <p className="text-[var(--text-color)] mt-6 font-text">
            Our event ticketing services offer a convenient and hassle-free way
            to book your tickets for all types of events. Whether it&apos;s a
            music festival, sports event, or theater performance, we have you
            covered. Our platform provides a one-stop-shop for all your
            ticketing needs, so you can focus on enjoying the event.
          </p>
          <h2 className="text-2xl font-semibold mt-7">
            With our event ticketing services, you can
          </h2>
          <div className="flex flex-col gap-4 mt-8 text-base">
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>
                Choose from a wide range of events across various categories
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>Book your tickets in just a few clicks</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>Get access to exclusive offers and discounts</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>Enjoy secure and reliable ticketing options</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#FDEEEC] rounded-full p-2">
                <FiCheck className="text-[#E95440]" />
              </div>
              <p>Clean, Polite & Knowledgeable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceEventticketing;
