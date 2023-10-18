import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import BottomBar from "../../components/BottomBar";

const ServiceShuttle = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Shuttle Services">
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
          src="image/services/shuttle_banner.png"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full py-8">
        <div className="max-w-[1280px] w-[90%] m-auto">
          <h1 className="text-[44px] font-semibold">Our Shuttle Services</h1>
          <p className="mt-8 text-base">
            Whether you need to be picked up from the airport, home, school,
            your workers and safely transported to your accommodations or any
            destination of choice we have got you covered. We are proud to offer
            our shuttle services to those in need of safe, reliable and
            affordable transportation. Our team of experienced drivers and
            modern vehicles ensure that your trip is both comfortable and
            efficient. Whether you&apos;re traveling for business or leisure,
            we&apos;ve got you covered.
          </p>
          <h1 className="text-[44px] font-semibold mt-8">Why Choose Us</h1>
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
                src="image/services/shuttle_thumbnail1.svg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="cols-span-1 flex flex-col justify-center items-center">
              <h1 className="text-[44px] font-semibold">Airport Transfers</h1>
              <p className="text-[var(--text-color)] font-text">
                Our airport shuttle service provides a convenient and
                stress-free way to get to and from the airport. We offer pick-up
                and drop-off services from all major airports, including JFK,
                LaGuardia, and Newark Liberty International.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse mt-6 md:mt-0 md:grid grid-cols-2 gap-16">
            <div className="cols-span-1 flex flex-col justify-center items-center">
              <h1 className="text-[44px] font-semibold">
                Corporate Shuttle Services
              </h1>
              <p className="text-[var(--text-color)] font-text">
                For businesses, we provide professional and efficient corporate
                shuttle services. Our team of drivers is knowledgeable and
                friendly, ensuring that your employees are transported to their
                destinations in a timely and comfortable manner.
              </p>
            </div>
            <div className="cols-span-1">
              <img
                src="image/services/shuttle_thumbnail2.png"
                className="w-full"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="cols-span-1">
              <img
                src="image/services/shuttle_thumbnail3.png"
                className="w-full"
                alt=""
              />
            </div>
            <div className="cols-span-1 flex flex-col justify-center items-center">
              <h1 className="text-[44px] font-semibold">Group Tours</h1>
              <p className="text-[var(--text-color)] font-text">
                Our group tour shuttle services offer a convenient and
                cost-effective way to travel. We can accommodate groups of any
                size and provide customized tours to meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default ServiceShuttle;
