/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="SOLOMON EDZIAH">
          IT/SYSTEM ADMIN COORDINATOR
        </BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full flex flex-col-reverse gap-4 md:grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4">
                Mr. Solomon Edziah functions as the IT/System Admin for YOKS.
                Mr. Edziah is the initial point of contact with end users
                reporting faults and requesting IT support. Additionally, he is
                responsible for seamless integration between the company
                website, the FMS portal, and SharePoint intranet. Solomon is
                also responsible for training of company in the adoption of the
                digital workplace. Solomon is a results-oriented and innovative
                software engineer, having a BSc in Electrical Engineering, and
                certifications in Enterprise Design Thinking (IBM).
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user8.svg"
                name="SOLOMON EDZIAH"
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
