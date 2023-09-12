import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";

const ServiceMeet = () => {
  return (
    <div>
      <div className="w-full">
        <BreadCrumb title="Meet & Greet | Visa Arrangement">
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
        <img src="image/services/meet_banner.svg" className="w-full" alt="" />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto py-16">
          <h1 className="text-[44px] text-[var(--text-color)] font-semibold">
            Meet & Greet | Visa Arrangement On Arrival
          </h1>
          <p className="text-[var(--text-color)] mt-6 font-text">
            We understand that traveling to a new place can be an exciting yet
            stressful experience, especially when it comes to getting a visa on
            arrival. That&apos;s why we are here to make your travel experience
            as smooth and stress-free as possible.
          </p>
          <p className="text-[var(--text-color)] mt-6 font-text">
            With our Meet & Greet | Visa Arrangement on arrival service, you can
            avoid the long queues and hassle of getting a visa on arrival. Our
            experienced team of professionals will take care of the visa
            application process for you and make sure you have a seamless
            arrival experience.
          </p>
          <img
            src="image/services/meet_thumbnail1.svg"
            className="w-full mt-6"
            alt=""
          />
          <p className="text-[var(--text-color)] mt-6 font-text">
            We will meet you at the airport with a warm welcome and assist you
            with your visa application process. Our team will take care of all
            the necessary formalities and ensure that you get your visa in the
            shortest time possible. Once your visa is approved, we will escort
            you to your vehicle and ensure that you have a comfortable and safe
            journey ahead.
          </p>
          <p className="text-[var(--text-color)] mt-6 font-text">
            We understand the importance of time and the need to make the most
            of your trip, that&nbsp;s why we offer this service at an affordable
            price. Our team will ensure that you have a smooth and stress-free
            arrival experience, so that you can start your journey with a smile.
          </p>
          <p className="text-[var(--text-color)] mt-6 font-text">
            So, why wait? Book your Meet & Greet | Visa Arrangement on arrival
            service today and enjoy a hassle-free arrival experience. We look
            forward to welcoming you soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceMeet;
