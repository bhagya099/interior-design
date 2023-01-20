import React, { useState } from "react";

import { Carousel } from "react-bootstrap";
import IMAGES from "../image/img";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    // <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
    //   <Carousel.Item>
    //     <div className="d-block home_image">
    //       <img src={IMAGES.Home_image.image_1} alt="First slide" />
    //       <img src={IMAGES.Home_image.image_2} alt="First slide" />
    //       <img src={IMAGES.Home_image.image_3} alt="First slide" />
    //       <img src={IMAGES.Home_image.image_4} alt="First slide" />
    //     </div>
    //   </Carousel.Item>
    // </Carousel>
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="d-flex flex-column carousel"
    >
      <Carousel.Item>
        <img
          className="home_image"
          src={IMAGES.Home_image.image_1}
          alt="First slide"
        />
        <img
          className="home_image"
          src={IMAGES.Home_image.image_2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50 home_image"
          src={IMAGES.Home_image.image_3}
          alt="First slide"
        />
        <img
          className="w-50 home_image"
          src={IMAGES.Home_image.image_4}
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 home_image"
          src={IMAGES.Home_image.image_3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Images</h3>
          <p>Some of my work.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home_image"
          src={IMAGES.Home_image.image_4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Images</h3>
          <p>Some of my work.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
