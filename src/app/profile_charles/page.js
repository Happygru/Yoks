/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="CHARLES OKYERE">QCT COORDINATOR</BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4">
                Mr. Charles Okyere Darko has direct supervisory responsibility
                for the driver’s staff and the fleet management team. Thus, Mr.
                Darko is the key management person responsible for the
                day-to-day operation—having to coordinate operational activities
                with Sales, Head Office, and other management staff. His key
                duties include developing, implementing, and maintaining Safety
                and Quality Control Plans; being responsible for vehicle
                inspection and maintenance; taking inventory of vehicles;
                assisting in driver recruitment; schedules and monitoring
                vehicle maintenance, and being responsible for overall
                operational efficiency. Charles has a BBA (Bachelor of Business
                Administration) from the University of Professional Studies;
                plus, certification/professional training in Basic Applied
                Accounting and Organizational Analysis.
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user3.svg"
                name="CHARLES OKYERE"
                addr="info@yoksghana.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="image/home/footer_illustration.svg"
          alt=""
          className="w-full"
        />
      </div>
    </>
  );
};

export default ProfileOcran;
