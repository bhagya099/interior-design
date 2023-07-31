import React from "react";
import IMAGES from "../image/img";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { auto } from "@popperjs/core";

export default function Home() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={"auto"}
      navigation={{
        nextEl: "",
      }}
      pagination={{ el: "", clickable: true }}
      scrollbar={{ draggable: true }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
    >
      {IMAGES.Home_image.map((slide, i) => (
        <SwiperSlide key={i}>
          <img src={slide} alt="Home-pics" className="img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
