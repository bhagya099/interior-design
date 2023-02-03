import React from "react";
import { Image, Row, Col } from "react-bootstrap";

const ResponsiveImage = ({ images, alt, width, height }) => (
  <Row>
    {images.map((image, index) => (
      <Col className="p-1" xs={12} md={4}>
        <Image
          key={index}
          src={image}
          alt={alt}
          width={width}
          height={height}
          thumbnail
          fluid
        />
      </Col>
    ))}
  </Row>
);

export default ResponsiveImage;
