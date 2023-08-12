/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import RButton from "@/components/RButton";
import { FaPlay } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import ProfileCard from "@/components/ProfileCard";
import AwardsCard from "@/components/AwardsCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="MR SETH YEBOAH OCRAN">CEO</BreadCrumb>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] m-auto w-[90%]">
          <div className="w-full flex flex-col-reverse gap-4 md:grid grid-cols-5 py-8">
            <div className="col-span-3 border-t border-[#dedede]">
              <h1 className="text-2xl border-b-2 border-[var(--text-color)] mt-1 font-semibold w-max pb-2">
                Biography
              </h1>
              <p className="mt-4">
                Seth created YOKS Investment Limited in 2001 as a sole
                proprietorship with just one car. Seth drove and managed Yoks
                with a single-minded vision to become the reliable car rental
                Company in the country. Today, after over two-decade, YOKS
                investment limited is now in an enviable position as the most
                reliable car rental and transportation company in Ghana; with a
                highly recognized brand that equals and rivals any of the known
                international brands. Seth’s ambition is to continue to build a
                world class business that is at par with any global company.
                Seth went into business after dropping out of high school due to
                financial hardships. He dabbled in various ventures and did odd
                jobs while trying to establish himself as an entrepreneur.
                During those times, Seth was certain that his fate was in his
                own hands and acted deliberately to create the results he
                wanted. While leading YOKS, as CEO, Seth and His team won
                fifteen plus awards and gain recognition within the industry as
                a trend setter. Through Seth’s business relationship with
                financial institutions as a lender, Seth was able to recommend
                the implementation of financial facilities that rewarded the
                borrower and satisfied the bank’s requirements, he saw his
                engagement with banks as a mutually beneficial partner. One of
                the highlights in Seth’s professional life as a CEO is meeting
                Camilla, the Duchess of Cornwall in Buckingham Palace as an
                invited guests on a very special occasion. Despite the successes
                Seth has had as a businessman and entrepreneur, one thing has
                not changed. Seth is still committed to inspiring the youth
                through speaking engagements, mentorship, and gainful
                employment. Seth’s positive attitude towards serving others lead
                him to becoming the sitting President of Car Rental Association
                of Ghana where he has fostered change, influenced policies that
                directly impacts the car rental industry such as the luxury car
                tax act to exclude businesses like his. Seth aspires to expand
                his business, employ more graduates with no experience and train
                them to become effective contributors to their own economic
                growth. That growth and people development translates into that
                of Ghana’s economic growth and helps reduce poverty amongst
                young people in Ghana and beyond.
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user1.png"
                name="Mr Seth Yeboah Ocran"
                addr="info@yoksghana.com"
              />
            </div>
          </div>
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
