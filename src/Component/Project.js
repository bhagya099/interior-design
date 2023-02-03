import React from "react";
import { Row, Col } from "react-bootstrap";
import ResponsiveImage from "./ResponsiveImage";
import Project_pic from "../image/Project_pic";

const Project = () => {
  return (
    // <>
    //   {Project_pics.map((image, i) => (
    //     <ResponsiveImage
    //       key={i}
    //       src={image}
    //       alt="Your Image"
    //       width={400}
    //       height={300}
    //     />
    //   ))}
    // </>
    // <Row>
    //   <Col>
    //   </Col>
    // </Row>
    <ResponsiveImage images={Project_pic} alt="Project 3d images" />
  );
};
export default Project;
