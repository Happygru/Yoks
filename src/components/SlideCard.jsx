import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

const SlideCard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Slider {...settings} className="max-w-[370px] w-full">
        <div className="p-8 bg-white rounded-md w-full flex flex-col gap-4 pt-10 h-[260px]">
          <p className="text-lg">Kit Payne</p>
          <p className="text-sm">Business Travel Consultant</p>
          <p className="text-lg font-semibold top-6">
            Thank you all so much for arranging these cars. My client is very
            delighted you could book all these cars for her
          </p>
        </div>
        <div className="p-8 bg-white rounded-md w-full flex flex-col gap-4 pt-10  h-[260px]">
          <p className="text-lg">Baba Tunde Johnson</p>
          <p className="text-sm">
            <br />
          </p>
          <p className="text-lg font-semibold top-6">
            The car was good, the driver was great. I want to rebook him for
            tomorrow. Same car, same driver
          </p>
        </div>
        <div className="p-8 bg-white rounded-md w-full flex flex-col gap-4 pt-10  h-[260px]">
          <p className="text-lg">Victor Nkolo</p>
          <p className="text-sm">
            <br />
          </p>
          <p className="text-lg font-semibold top-6">
            I enjoyed all my rides. Thank you so much for a seamless service and
            remembering my name on the second day.
          </p>
        </div>
        <div className="p-8 bg-white rounded-md w-full flex flex-col gap-4 pt-10  h-[260px]">
          <p className="text-lg">Rebecca Meuller</p>
          <p className="text-sm">
            <br />
          </p>
          <p className="text-lg font-semibold top-6">
            I liked your services very much. Nothing to complain about. See you
            again when next I am in Ghana
          </p>
        </div>
        <div className="p-8 bg-white rounded-md w-full flex flex-col gap-4 pt-10  h-[260px]">
          <p className="text-lg">Rebecca Meuller</p>
          <p className="text-sm">
            <br />
          </p>
          <p className="text-lg font-semibold top-6">
            Excellent drivers. Very professional.
          </p>
        </div>
        <div className="p-8 bg-white rounded-md w-full flex flex-col gap-4 pt-10 overflow-auto  h-[260px]">
          <p className="text-lg">Zimbabwe Embassy</p>
          <p className="text-sm">
            <br />
          </p>
          <p className="text-lg font-semibold top-6">
            Our delegation was very happy with your service and professionalism
            from the drivers. They spoke very highly of your driver. They said
            he was efficient and professional. It was a pleasure working with
            your company.
          </p>
        </div>
      </Slider>
      <div className="flex items-center w-full gap-4">
        <div className="p-3 bg-white rounded-full cursor-pointer w-max">
          <LiaLongArrowAltLeftSolid />
        </div>
        <div className="p-3 bg-white rounded-full cursor-pointer w-max">
          <LiaLongArrowAltRightSolid />
        </div>
        <p>1/6</p>
      </div>
    </>
  );
};

export default SlideCard;
