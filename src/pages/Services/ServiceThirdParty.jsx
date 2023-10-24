import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import CountNumberCard from "../../components/CountNumberCard";
import ShareCard from "../../components/ShareCard";

const ServiceThirdParty = () => {
  return (
    <>
      <div className="w-full">
        <BreadCrumb title="ThirdParty">
          <Link to="/">Home</Link> - <Link to="#">Services</Link>
        </BreadCrumb>
      </div>
      <div className="w-full">
        <img
          src="image/services/thirdparty_banner.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-full">
        <div className="w-[90%] m-auto max-w-[1100px] py-8">
          <h1 className="font-semibold text-3xl">
            6 of the best sustainable travel companies
          </h1>
          <p className="py-6 leading-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex justify-evenly w-[90%] max-w-[1280px] m-auto pb-8 flex-wrap">
          <CountNumberCard
            number={3500}
            symbol={"+"}
            text="Earn money each month"
          />
          <CountNumberCard
            number={100}
            symbol={"%"}
            text="Insurance coverage available"
          />
          <CountNumberCard
            number={50}
            symbol={"+"}
            text="Cars Listed Accross Ghana"
          />
        </div>
      </div>
      <div className="w-full relative mb-8">
        <img
          src="image/services/thirdparty_background.png"
          className="w-full h-auto"
          alt=""
        />
        <div className="w-full absolute top-0 flex justify-center">
          <div className="w-[90%] max-w-[1280px] flex justify-end pt-20">
            <div className="w-1/2">
              <p className="text-8xl font-bold hidden md:block">
                <span className="text-9xl">B</span>e a partner Today. Earn with
                you car
              </p>
            </div>
          </div>
        </div>
        <img
          src="image/services/thirdparty_car.png"
          alt=""
          className="absolute w-1/2 -bottom-5 right-0"
        />
      </div>
      <div className="w-full">
        <div className="w-[90%] max-w-[1280px] m-auto">
          <div className="w-4/6 flex flex-col gap-6 justify-start items-start">
            <h1 className="text-5xl font-semibold">Gettings Started Is Easy</h1>
            <p className="text-xl">
              Renting your car to our riders is easy and convenient. Simply sign
              up, list your car, and set your own price. You'll start earning
              passive income in no time. It's that simple!
            </p>
            <button className="py-4 px-12 bg-[#39c0c3] text-white text-lg rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="w-[90%] max-w-[1280px] m-auto flex items-center justify-center flex-col gap-6">
          <h1 className="font-semibold text-3xl text-center">
            Who Can Share Their Car On Wopecar?
          </h1>
          <p className="w-[90%] max-w-[375px] m-auto text-center">
            Whether you are an individual, an entrepreneur, or a rental agency,
            Wopecar can help you make money with your cars
          </p>
          <div className="w-full gap-4 flex justify-center flex-wrap">
            <ShareCard
              title="Are you an indivisual entrepreneur?"
              text="Join Wopecar and start managing your own fleet of cars. You set your own prices and availability, and we handle the rest."
              image="image/services/sharecard2.png"
            />
            <ShareCard
              title="Do you own a rental agency?"
              text="List your cars on Wopecar and get more exposure and bookings. You keep control of your cars and customer, and we provide the support and insurance."
              image="image/services/sharecard1.png"
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default ServiceThirdParty;
