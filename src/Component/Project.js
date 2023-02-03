import React from "react";
import { Row, Col } from "react-bootstrap";
import ResponsiveImage from "./ResponsiveImage";
import IMAGES from "../image/img";

const Project = () => {
  return (
    <div className="mid_body">
      <ResponsiveImage images={IMAGES.Project_pics} alt="Project 3d images" />
    </div>
  );
};
export default Project;
