/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="VIVIAN ARMAH">
          SALES & MARKETING COORDINATOR
        </BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4">
                Mrs. Vivian Armah, as the Sales & Marketing Coordinator,
                coordinates closely with the Client Relations Coordinator to
                achieve and maintain acceptable customer experience. Her duties
                and responsibilities comprise supervision of the sales
                associates staff; managing the entire sales cycle from sales
                leads to securing a deal; promoting the company through social
                media and networking for sales opportunities; providing
                professional after-sales support to maximize customer loyalty;
                developing marketing strategies; and tracking customer-related
                data. Vivian has an MA in International Public Service
                Relations; MA in Development Communication; and a BA in
                Political Studies.
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user6.svg"
                name="VIVIAN ARMAH"
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
