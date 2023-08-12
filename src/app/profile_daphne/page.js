/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "@/components/BreadCrumb";
import ProfileCard from "@/components/ProfileCard";

const ProfileOcran = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="Ms DAPHNE SPENCER">
          LEAD CONSULTANT/ADVISORY BOARD MEMBER YOKS RENT A CAR
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
                Recently named one of Africa’s top 100 most powerful in
                Hospitality by International Hospitality Institute, USA. Having
                worked with globally recognizable brands such as Walt Disney
                World, Hyatt, Marriott & Hilton hotels, holding different
                positions in focused service to luxury hotels, Daphne is
                excellent at matching data with expert advice and sharing
                insight that generates opportunity for growth in hospitality. As
                a director of sales and marketing, she established a track
                record of RevPAR index growth through effective revenue
                management training and strategically designing business plan,
                leading with transparency, and ensuring her team&aqos;s success.
                As a National Sales Manager at Hilton, she contributed
                multi-millions in revenue annually and secured multiple-year
                contracts with her top accounts creating years of business base
                for her market. At Micros systems Inc., She traveled between the
                US and Canada installing hotel systems and training hospitality
                associates and managers on systems use. Undoubtedly, those were
                such incredible years, seeing coast to coast of North America
                and touching about 49 hotels over the years. Daphne did hotel
                system installs for newly built, converted hotels, system
                upgrades from legacy products and even de-flagging systems in
                some hotels. Daphne is proud to have been part of the tech team
                for the opening of the Montage Beverly Hills Hotel which
                recently sold for about $415 million dollars. During her time
                away from the hotel industry, she dabbled in finance as a fraud
                investigator at Discover Financial Services and a successful
                mortgage broker at J P Morgan Chase. These pauses only served to
                remind Daphne of her eternal love for hospitality and travel in
                general. Daphne is quickly establishing herself as an asset to
                Africa&aqos;s tourism and hospitality industries through
                business consulting, speaking engagement on government policies
                directly impacting the private sector, project management,
                trainings, workshops, coaching and mentoring. Daphne resides and
                works in Ghana and the US, where she works as an international
                consultant for hospitality companies, businesses, hotels &
                restaurant owners. Daphne serves are a liaison between owners
                and international brands for franchises, positioning for
                investment etc. Currently, Daphne is the opening GM of a global
                brand hotel (first of its kind, coming up in Q4 of 2023) in
                Accra, Ghana. Transforming YOKS Rent A Car, a 22 years old
                organization through digitization and diversification. Pitching
                as a lead consult for Moon Touch Hospitality’s
                multimillion-dollar hotel and conference center in the Northern
                region of Ghana. And, running affairs at AAWTH as the co-founder
                and President with presence in about 17 countries across the
                continent of Africa and growing
              </p>
            </div>
            <div className="col-span-2 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              <ProfileCard
                img="user2.svg"
                name="Mr Seth Yeboah Ocran"
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
