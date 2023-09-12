import { useSearchParams } from "react-router-dom";
import TeamMember from "./TeamMember";

const TeamDetail = () => {
  let [searchParams] = useSearchParams();
  let page = searchParams.get("name");
  switch (page) {
    case "ocran":
      return (
        <TeamMember
          title="MR SETH YEBOAH OCRAN"
          role="CEO"
          img="user1.png"
          name="Mr Seth Yeboah Ocran"
          isAward={true}
          intro="Seth created YOKS Investment Limited in 2001 as a sole
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
                young people in Ghana and beyond."
        />
      );
    case "daphne":
      return (
        <TeamMember
          title="MS DAPHNE SPENCER"
          role="LEAD CONSULTANT/ADVISORY BOARD MEMBER YOKS RENT A CAR"
          img="user2.svg"
          name="Ms DAPHNE SPENCER"
          intro="Recently named one of Africa’s top 100 most powerful in
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
                continent of Africa and growing"
        />
      );
    case "charles":
      return (
        <TeamMember
          title="CHARLES OKYERE"
          role="QCT COORDINATOR"
          img="user3.svg"
          name="CHARLES OKYERE"
          intro="Mr. Charles Okyere Darko has direct supervisory responsibility
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
                Accounting and Organizational Analysis."
        />
      );
    case "emmanuel":
      return (
        <TeamMember
          title="EMMANUEL ATU OCRAN"
          role="ACCOUNTS PAYABLE COORDINATOR"
          img="user4.svg"
          name="EMMANUEL ATU OCRAN"
          intro="Mr. Emmanuel Ocran, having over 5 years of experience with YOKS,
                has recently been promoted to Accounts Payable Coordinator. He
                has duties and responsibilities to track and monitor payables;
                make payments to vendors and service providers; do banking,
                payroll, and credit control functions; maintain expense and
                petty cash account, ensure cash management; assist in internal
                auditing; and prepares weekly reports. Emmanual is a dedicated,
                committed, and goal-oriented person who goes the extra mile to
                ensure that his goals and objectives are met. Mr. Ocran has
                strong communication skills and interpersonal relationship
                skills."
        />
      );
    case "george":
      return (
        <TeamMember
          title="GEORGE SIMPSON"
          role="CLIENT RELATIONS COORDINATOR"
          img="user5.svg"
          name="GEORGE SIMPSON"
          intro="Mr. George Simpson’s role as Client Relations Coordinator
                focuses on building relationships with clients to ensure that
                their needs are met—for a satisfactory Customer Experience. His
                duties encompasses full understanding Customer Concerns; liaise
                and coordinate client activities with Sales staff and other
                Coordinators; building connections and networks on behalf of the
                company; sourcing and approving Third Party vehicles; tracks
                Third party revenue; assists in accounts receivables; and
                ensures proper distribution of Productivity Reports"
        />
      );
    case "vivian":
      return (
        <TeamMember
          title="VIVIAN ARMAH"
          role="SALES & MARKETING COORDINATOR"
          img="user6.svg"
          name="VIVIAN ARMAH"
          intro="Mrs. Vivian Armah, as the Sales & Marketing Coordinator,
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
                Political Studies."
        />
      );
    case "cyril":
      return (
        <TeamMember
          title="CYRIL BOE JNR"
          role="HR/ADMIN COORDINATOR"
          img="user7.svg"
          name="CYRIL BOE JNR"
          intro="Mr. Cyril Boe Jnr, as the HR/Admin Coordinator, has an important
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
                Administration."
        />
      );
    case "solomon":
      return (
        <TeamMember
          title="SOLOMON EDZIAH"
          role="IT/SYSTEM ADMIN COORDINATOR"
          img="user8.svg"
          name="SOLOMON EDZIAH"
          intro="Mr. Solomon Edziah functions as the IT/System Admin for YOKS.
                Mr. Edziah is the initial point of contact with end users
                reporting faults and requesting IT support. Additionally, he is
                responsible for seamless integration between the company
                website, the FMS portal, and SharePoint intranet. Solomon is
                also responsible for training of company in the adoption of the
                digital workplace. Solomon is a results-oriented and innovative
                software engineer, having a BSc in Electrical Engineering, and
                certifications in Enterprise Design Thinking (IBM)."
        />
      );
    default:
      break;
  }
};

export default TeamDetail;
