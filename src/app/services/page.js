import BreadCrumb from "@/components/BreadCrumb";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Services">
          <Link href="/">Home</Link> - <Link href="#">Services</Link>
        </BreadCrumb>
      </div>
      <div className="w-full bg-[#dedede] py-20">
        <div className="max-w-[1280px] w-[90%] m-auto grid grid-cols-3 gap-36">
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail1.svg"
              title="Chauffeur Driven Day Trips"
              text="Our most popular car rental service which includes the vehicle of your choice"
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail2.svg"
              title="Self-Drive options:"
              text="This service is the self-drive car rental option of YOKS."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail3.svg"
              title="Corporate Fleet Management"
              text="Over the years we have built the technical capacity and managerial competencies in fleet management"
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail4.svg"
              title="YOKS Shuttle Services"
              text="Whether you need to be picked up from the airport, home, school, your workers and safely transported"
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail5.svg"
              title="Driver Personnel Outsourcing"
              text="we have a talented pool of drivers to staff any position for short and long term."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail6.svg"
              title="YOKS Special Events ticketing"
              text="Ay YOKS we host events, as well as serve as special events ticket portal. for all your event needs."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail7.svg"
              title="Security Escort"
              text="our high value clients who may need a little extra security are provided for based on formal request ."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail8.svg"
              title="YOKS Tours Packages"
              text="We have great packages tailored to suit your travel and tourism needs throughout the country."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="thumbnail9.svg"
              title="Chauffeur Driven Day Trips"
              text="Our most popular car rental service which includes the vehicle of your choice"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
