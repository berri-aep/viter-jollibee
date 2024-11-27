import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgPath } from "@/components/helpers/functions-general";

const SliderBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 500,
  };
  return (
    <Slider {...settings}>
      <img
        src={`${imgPath}/slider-1.jpg`}
        alt=""
        className="h-[200px] object-cover w-full"
      />
      <img
        src={`${imgPath}/slider-2.png`}
        alt=""
        className="h-[200px] object-cover w-full"
      />
      <img
        src={`${imgPath}/slider-3.jpg`}
        alt=""
        className="h-[200px] object-cover w-full"
      />
    </Slider>
  );
};

export default SliderBanner;
