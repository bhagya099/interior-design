import React from "react";
import IMAGES from "../image/img";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {IMAGES.Home_image.map((slide, i) => (
        <SwiperSlide key={i}>
          <img src={slide} alt="Home-pics" className="img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
