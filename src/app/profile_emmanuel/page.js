/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="EMMANUEL ATU OCRAN">
          ACCOUNTS PAYABLE COORDINATOR
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
                Mr. Emmanuel Ocran, having over 5 years of experience with YOKS,
                has recently been promoted to Accounts Payable Coordinator. He
                has duties and responsibilities to track and monitor payables;
                make payments to vendors and service providers; do banking,
                payroll, and credit control functions; maintain expense and
                petty cash account, ensure cash management; assist in internal
                auditing; and prepares weekly reports. Emmanual is a dedicated,
                committed, and goal-oriented person who goes the extra mile to
                ensure that his goals and objectives are met. Mr. Ocran has
                strong communication skills and interpersonal relationship
                skills.
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user4.svg"
                name="EMMANUEL ATU OCRAN"
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
