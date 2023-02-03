import React, { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import IMAGES from "../image/img";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return <ResponsiveImage images={IMAGES.Home_image} alt="Project 3d images" />;
}
