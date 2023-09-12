import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";

const ServiceDriverpersonnel = () => {
  return (
    <div>
      <div className="w-full">
        <BreadCrumb title="Driver Personal Outsourcing">
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
          src="image/services/driverpersonnel_banner.svg"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto py-16">
          <h1 className="text-[44px] text-[var(--text-color)]">
            Welcome to Driver Personnel Outsourcing Services!
          </h1>
          <p className="text-[var(--text-color)] mt-6 font-text">
            Our company is dedicated to providing top-notch driver personnel
            outsourcing services to businesses of all sizes. With our highly
            skilled and experienced drivers, we ensure that you area served on
            time, every time.
          </p>
          <p className="text-[var(--text-color)] mt-6 font-text">
            We understand the importance of having a reliable and efficient
            transportation system in place, especially in today&apos;s
            fast-paced business environment. That&apos;s why we have a team of
            experts who are dedicated to ensuring that all of our clients
            receive the highest quality of service.
          </p>
          <img
            src="image/services/driverpersonnel_thumbnail1.svg"
            className="w-full mt-6"
            alt=""
          />
          <div className="text-[var(--text-color)] mt-6 font-text">
            we believe in providing our clients with the highest level of
            customer service. Our team of experts is always available to assist
            you with any questions or concerns that you may have.{" "}
            <p>
              We understand the unique needs of each of our clients, and we work
              closely with you to develop customized solutions that meet your
              specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDriverpersonnel;
