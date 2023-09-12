import BreadCrumb from "../../components/BreadCrumb";
import ProfileCard from "../../components/ProfileCard";
import AwardsCard from "../../components/AwardsCard";
import BottomBar from "../../components/BottomBar";

const TeamMember = ({ title, role, intro, img, name, isAward = false }) => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title={title}>{role}</BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full flex flex-col-reverse gap-4 md:grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4 font-text">{intro}</p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard img={img} name={name} addr="info@yoksghana.com" />
            </div>
          </div>
          {isAward ? (
            <>
              <h1 className="text-2xl border-b-2 pb-2 border-[var(--text-color)] font-semibold w-max">
                Awards
              </h1>
              <hr className="w-3/5" />
              <div className="w-full grid grid-cols-1 md:grid-cols-2 pb-8 mt-4 gap-4">
                <div className="col-span-1">
                  <AwardsCard
                    year="2015"
                    title="Car Rental Company Of The Year"
                    subtitle="National Tourism Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2020"
                    title="Business Excellence In the Travel & Tour Sector"
                    subtitle="T.W.A.R.M Business & Business Leadership Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2011"
                    title="Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By GTF"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2014"
                    title="CITATION-Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By CIMG"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2015"
                    title="Car Rental Company Of The Year"
                    subtitle="National Tourism Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2020"
                    title="Business Excellence In the Travel & Tour Sector"
                    subtitle="T.W.A.R.M Business & Business Leadership Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2011"
                    title="Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By GTF"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2014"
                    title="CITATION-Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By CIMG"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2015"
                    title="Car Rental Company Of The Year"
                    subtitle="National Tourism Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2020"
                    title="Business Excellence In the Travel & Tour Sector"
                    subtitle="T.W.A.R.M Business & Business Leadership Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2011"
                    title="Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By GTF"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2014"
                    title="CITATION-Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By CIMG"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2015"
                    title="Car Rental Company Of The Year"
                    subtitle="National Tourism Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2020"
                    title="Business Excellence In the Travel & Tour Sector"
                    subtitle="T.W.A.R.M Business & Business Leadership Awards"
                    status="Donated"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2011"
                    title="Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By GTF"
                  />
                </div>
                <div className="col-span-1">
                  <AwardsCard
                    year="2014"
                    title="CITATION-Hospitality Facility Of The Year"
                    subtitle="Chartered Institute of Marketing, Ghana"
                    status="Donated By CIMG"
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default TeamMember;
