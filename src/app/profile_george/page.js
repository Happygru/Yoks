/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="GEORGE SIMPSON">
          CLIENT RELATIONS COORDINATOR
        </BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full flex flex-col-reverse gap-4 md:grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4 font-text">
                Mr. George Simpson’s role as Client Relations Coordinator
                focuses on building relationships with clients to ensure that
                their needs are met—for a satisfactory Customer Experience. His
                duties encompasses full understanding Customer Concerns; liaise
                and coordinate client activities with Sales staff and other
                Coordinators; building connections and networks on behalf of the
                company; sourcing and approving Third Party vehicles; tracks
                Third party revenue; assists in accounts receivables; and
                ensures proper distribution of Productivity Reports
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user5.svg"
                name="GEORGE SIMPSON"
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
