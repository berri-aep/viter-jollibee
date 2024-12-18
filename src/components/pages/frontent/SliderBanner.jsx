import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general";
import ServerError from "@/components/partials/ServerError";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderBanner = ({ isLoadingAdv, isFetchingAdv, errorAdv, dataAdv }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 500,
  };
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/adv`, // endpoint
    "get", // method
    "adv"
  );
  return (
    <>
      <div className="relative h-[200px]">
        {(isFetchingAdv || isLoadingAdv) && <FetchingSpinner />}
        {errorAdv && <ServerError />}
        <Slider {...settings}>
          {dataAdv?.count > 0 &&
            dataAdv?.data.map((item, key) => {
              return (
                <img
                  key={key}
                  src={`${imgPath}/${item.adv_image}`}
                  alt=""
                  className="h-[200px] object-cover object-center"
                />
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default SliderBanner;
