import BreadCrumb from "../../components/BreadCrumb";
import { BsShieldCheck } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrCar } from "react-icons/gr";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="About Us">
          <Link to="/">Home</Link> - <Link to="#">About Us</Link>
        </BreadCrumb>
        <img src="image/aboutus/banner.png" className="w-full" alt="" />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] md:px-[10%] m-auto py-12 font-semibold leading-8 text-center flex flex-col items-center gap-4">
          <h1 className="text-[33px] text-[var(--text-color) pb-8">
            We are your Reliable Choice for Safety and Comfort on the Road
          </h1>
          <p className="text-lg text-[var(--text-color)] leading-8 font-text">
            YOKS has been providing professional transportation services over
            the years – since its inception about 22 years ago for Ghana&#39;s
            blue-chip companies, multi-nationals, and individuals. Safety,
            reliability, reputation, and integrity are some of the hallmark
            qualities of YOKS.
          </p>
          <p className="text-lg text-[var(--text-color)] leading-8 font-text">
            The company has strategically been transformed from its beginnings
            as a sole proprietorship with a one-car-business into a notable main
            player in the industry that offers complete transport management
            services in its market.
          </p>
          <p className="text-lg text-[var(--text-color)] leading-8 font-text">
            Various awards over the past years give emphasis to the high-quality
            service and competence of YOKS: National Tourism Awards, for Best
            Car Rental Company in 2012 &amp; 2013, Chartered Institute Of
            Marketing Ghana (CIMG) Awards for Hospitality Facility of Year in
            2012, 2013 &amp; 2014, and Ghana Business &amp; Financial Services
            Excellence Gold Awards in 2013.
          </p>
        </div>
      </div>
      <div
        className="w-full h-max lg:h-[275px] overflow-hidden relative"
        style={{
          backgroundImage: "url('image/home/number_back.svg')",
        }}
      >
        <div className="max-w-[1280px] w-[90%] h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center m-auto py-2">
          <div
            className=" text-white flex flex-wrap gap-2 md:block text-[28px] md:text-[35px] lg:text-[40px] font-semibold col-span-1"
            data-aos="fade-right"
          >
            <p>Showcase some</p>
            <p>impressive numbers.</p>
          </div>
          <div
            className="flex items-center justify-between col-span-1"
            data-aos="fade-left"
          >
            <div className="text-center text-white">
              <p className="text-[40px] font-semibold leading-tight">285</p>
              <p>vehicles</p>
            </div>
            <div className="text-center text-white">
              <p className="text-[40px] font-semibold leading-tight">200,000</p>
              <p>Miles</p>
            </div>
            <div className="text-center text-white">
              <p className="text-[40px] font-semibold leading-tight">13K</p>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] w-[90%] md:px-[10%] m-auto py-12 font-semibold leading-8 text-center flex flex-col items-center gap-4">
          <h1 className="text-[33px] text-[var(--text-color) pb-8">
            Our Story
          </h1>
          <p className="text-lg text-[var(--text-color)] leading-8">
            YOKS, a multi award winning company established over two decades
            ago, having served some very high-profile dignitaries visiting Ghana
            and partnered with some of Ghana’s premier companies such as
            Movenpick Ambassador Hotel, Kempinski Hotel, Accra Marriott Hotel,
            Labadi Beach Hotel, Samsung, West Africa Pipeline Company. Seth
            Yeboah Ocran, the CEO of YOKS is a self-made successful entrepreneur
            looking to use his life lessons from as far back as a mini-bus
            conductor (“ trotro mate”), Laborer at Urban Roads Department, A
            driver, Salesman, Inter[1]country trader (Ghana-Togo-Ghana) to
            becoming a CEO of a multi-million dollars company he built from
            nothing.
          </p>
          <p className="text-lg text-[var(--text-color)] leading-8">
            YOKS Rent-A-Car is a brand name and a subsidiary of YOKS Investment
            Limited, a registered and licensed service provider in the Car
            Rental and the Tourism sector. With Tax Identification number-
            C0005722187
          </p>
          <p className="text-lg text-[var(--text-color)] leading-8">
            The company started out as a sole proprietorship 22 years ago, with
            1 car, and a single customer, Today however, YOKS is a main player
            in the car rental, finance lease and fleet management industry,
            acknowledged as “the reliable leader”.
          </p>
          <p className="text-lg text-[var(--text-color)] leading-8">
            The company has, over the years, built a remarkable list of clients,
            both corporate and individuals, which includes: - NGOs, United
            Nations Institutions and Agencies, Government of Ghana (Ministries &
            State Protocol), Banking Institutions, International Hotel Brands,
            individual dignitaries, visiting VIPs and luminaries. YOKS has a
            strong and efficient management team with professionally trained
            transportation personnel combined with an impressive safety record
            over the past 22 years.
          </p>
        </div>
      </div>
      <div className="w-full py-6">
        <div className="max-w-[1280px] w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-[var(--text-color)] font-semibold gap-8">
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <BsShieldCheck className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">ACCOUNTABILITY</h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              We demand accountability in every aspect of our business from all
              our staff.
            </p>
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <RiMoneyDollarCircleLine className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">SAFETY</h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              We make an extra effort to ensure that safety standard are at
              their highest peak and adhered to at all times.
            </p>
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <GrCar className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">INTEGRITY</h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              We are respectful and responsible for following through on our
              commitments to clients and other stakeholders.
            </p>
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <BsShieldCheck className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">VISION</h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              To be the reliable leader in the car rentals and travel & tourism
              sector
            </p>
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <RiMoneyDollarCircleLine className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">
              PEOPLE DEVELOPMENT
            </h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              To develop the human talent of our staff ,community and associates
            </p>
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <GrCar className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">Achievement</h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              We believe in achieving challenging goals through superior
              performance and rewards.
            </p>
          </div>
          <div className="flex flex-col items-center col-span-1 gap-4 sm:px-[10%] text-center">
            <div className="rounded-full bg-[#FDEEEC] w-12 h-12 flex items-center justify-center">
              <GrCar className="text-[var(--text-color)] font-bold text-2xl" />
            </div>
            <h3 className="text-lg text-[var(--text-color)]">MISSION</h3>
            <p className="text-sm text-[var(--text-color)] text-center leading-6">
              To provide our clients with excellent service at all times with a
              competent and professional staff, and to create value for our
              stakeholders; by ensuring complete customer satisfaction through
              excellence, efficiency and security.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full py-60"
        style={{
          backgroundImage: "url(image/aboutus/csr_background.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1280px] w-[90%] m-auto text-center text-white">
          <h1 className="font-semibold text-7xl">CSR</h1>
          <p className="text-3xl leading-10 mt-36">
            YOKS is committed to planting 20 trees every quarter by contracting
            the Youth to provide gainful employment as it implements it plans in
            Accra. YOKS to adopt 5 major streets the next 5 years to plant trees
            along. By doing this, YOKS is aligning itself with the UN SDG # 13
            of Urgent climate action to combat climate change.
          </p>
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

export default Aboutus;
