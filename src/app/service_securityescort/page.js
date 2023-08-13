/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import RButton from "@/components/RButton";
import { FaPlay } from "react-icons/fa";

const Meet = () => {
  return (
    <div>
      <div className="w-full">
        <BreadCrumb title="Security Escort">
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
          src="image/services/securityescort_banner.svg"
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="col-span-1">
            <img
              src="image/services/securityescort_thumbnail1.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-[44px] text-[var(--text-color)]">
              Security Escort Services
            </h1>
            <p className="text-[var(--text-color)] mt-4 font-text">
              ur high value clients who may need a little extra security are
              provided for based on formal request from our clients for all
              travels and personnel protection. A standard escort team shall
              comprise of; One Security Supervisor, One security Driver and
              two-armed police officer. We are also able to arrange with police
              MTTD to provide a single motorcade escort as an alternative
              arrangement. Escorts shall be carried out with one passenger
              vehicle (Saloon Car or Jeep) as requested by the client and an
              escort vehicle a- 4X4 Jeep.ur high value clients who may need a
              little extra security are provided for based on formal request
              from our clients for all travels and personnel protection. A
              standard escort team shall comprise of; One Security Supervisor,
              One security Driver and two-armed police officer. We are also able
              to arrange with police MTTD to provide a single motorcade escort
              as an alternative arrangement. Escorts shall be carried out with
              one passenger vehicle (Saloon Car or Jeep) as requested by the
              client and an escort vehicle a- 4X4 Jeep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
