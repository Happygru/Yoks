/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="CYRIL BOE JNR">HR/ADMIN COORDINATOR</BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4">
                Mr. Cyril Boe Jnr, as the HR/Admin Coordinator, has an important
                role at YOKS. His duty and responsibility is to provide HR
                support for all YOKS staff including the CEO. Specifically, he
                handles office admin tasks; keeps employee records; assists in
                accounting; monitors asset register, controls office
                communication procedures, distributes company policies; and
                enforces standards for the data management system. having over 5
                years’ experience in car rentals, plays key role as Transport
                and Fleet Manger of YOKS. He is a dedicated, committed and
                goal-oriented person who goes the extra mile to ensure that his
                goals and objectives are met. Mr. Boe has good management
                skills, enhanced with excellent analytical and problem-solving
                skills. He has an MBA in Finance, and a BS in Business
                Administration.
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user6.svg"
                name="CYRIL BOE JNR"
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
