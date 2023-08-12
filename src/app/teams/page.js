/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";

const Teams = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Our Team">
          <Link href="/">Home</Link> - <Link href="#">Our Team</Link>
        </BreadCrumb>
      </div>
      <div className="w-full py-12">
        <div className="max-w-[1280px] w-[90%] m-auto text-center">
          <h1 className="text-[44px] font-semibold">
            Meet Our team of Experts
          </h1>
          <div className="w-full mt-6 text-2xl leading-10 md:px-[10%] lg:px-[15%]">
            <p>
              YOKS management team is headed by its CEO and Chairman Mr. Seth
              Yeboah Ocran; however, management as a company culture begins from
              the bottom—starting from the car detailing personnel level through
              to administrative and executive level. Discipline, proficiency,
              cost effectiveness, and a commitment to ensuring quality, timely
              results and deliverables are at the core of each member of the
              YOKS team. Provision of complete transportation services is a
              specialized field that requires specific types of professionals
              with the skill and ability to follow through on each client as a
              project to be managed using the same standard quality control
              procedures uniformly to deliver quality efficient timely services.
            </p>
            <p>
              Continued improvement and teamwork are essential at YOKS;
              therefore, senior management ensures that it takes the steps
              necessary at getting everybody on the same page and pulling in the
              same direction for operational efficiency and improved
              productivity—which will enable management work better as a whole.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 pb-8">
          <div className="col-span-1">
            <Link
              href="/profile_ocran"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user1.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">Mr Steth Yeboah Ocran</p>
                  <p className="text-lg">CEO</p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_daphne"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user2.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">Ms Daphne Spencer</p>
                  <p className="text-lg">
                    Lead Consultant/Advisory Board Member
                  </p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_charles"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user3.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">CHARLES OKYERE</p>
                  <p className="text-lg">QCT COORDINATOR</p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_emmanuel"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user4.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">EMMANUEL ATU OCRAN</p>
                  <p className="text-lg">ACCOUNTS PAYABLE COORDINATOR</p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_george"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user5.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">GEORGE SIMPSON</p>
                  <p className="text-lg">CLIENT RELATIONS COORDINATOR</p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_vivian"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user6.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">VIVIAN ARMAH</p>
                  <p className="text-lg">SALES & MARKETING COORDINATOR</p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_cyril"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user7.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">CYRIL BOE JNR</p>
                  <p className="text-lg">HR/ADMIN COORDINATOR</p>
                </div>
              </>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="/profile_solomon"
              target="_blank"
              className="w-full flex flex-col gap-6 cursor-pointer"
            >
              <>
                <img src="image/teams/user8.svg" alt="" className="w-full" />
                <div>
                  <p className="text-lg font-bold">SOLOMON EDZIAH</p>
                  <p className="text-lg">IT/SYSTEM ADMIN COORDINATOR</p>
                </div>
              </>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-12">
        <div className="max-w-[1280px] w-[90%] m-auto text-center">
          <h1 className="text-[44px] font-semibold">External Consultant</h1>
          <div className="w-full mt-6 text-2xl leading-10 md:px-[10%] lg:px-[15%]">
            <p>
              In addition to its management, YOKS has employed the services of
              external professional consultants to enhance management functions
              in the areas of corporate governance, compliance, financial
              management, and corporate strategy.
            </p>
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

export default Teams;
