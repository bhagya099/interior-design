import React from "react";
import { Image, Row, Col } from "react-bootstrap";

const ResponsiveImage = ({ images, alt, width, height }) => (
  <Row className="d-flex align-items-stretch">
    {images.map((image, index) => (
      <Col className="mb-2" xs={12} md={4}>
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
