import React, { useState } from "react";

import { Carousel, Image, Row, Col } from "react-bootstrap";
import IMAGES from "../image/img";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Row>
      <Col>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Image
              src={IMAGES.Home_image.image_1}
              alt="first pic"
              className="d-block w-100"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={IMAGES.Home_image.image_2}
              alt="first pic"
              className="d-block w-100"
              fluid
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src={IMAGES.Home_image.image_3}
              alt="first pic"
              className="d-block w-100"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={IMAGES.Home_image.image_3}
              alt="first pic"
              className="d-block w-100"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}
