import React, { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import IMAGES from "../image/img";

export default function Home() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  // return <ResponsiveImage images={IMAGES.Home_image} alt="Project 3d images" />;
  return (
    <Carousel fade>
      {IMAGES.Home_image.forEach((image) => {
        <Carousel.Item>
          <Image className="d-block w-100" src={image} alt="slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>;
      })}

      {/* <Carousel.Item> */}
      {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel>
  );
}
