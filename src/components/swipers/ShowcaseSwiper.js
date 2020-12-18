import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import showcase1 from "../../images/showcase1.jpg";
import showcase2 from "../../images/showcase2.jpg";
import showcase3 from "../../images/showcase3.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ShowcaseSwiper = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} navigation pagination autoplay>
      <SwiperSlide>
        <img src={showcase1} alt="showcase1" className="img-fluid" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={showcase2} alt="showcase2" className="img-fluid" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={showcase3} alt="showcase3" className="img-fluid" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ShowcaseSwiper;
