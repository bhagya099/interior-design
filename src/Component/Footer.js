import { ArrowRight } from "react-bootstrap-icons";
import IMAGES from "../image/img";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="clr">
      <Container className="mt-1 p-4">
        <Row>
          <Col>
            <h4>SDStudio</h4>
          </Col>
          <Col>
            <p>Follow us : Instagram</p>
          </Col>

          <Col>
            <p>Our services</p>
            <ul>
              <li>SPACE PLANNING</li>
              <li>DESIGNING</li>
              <li>3D RENDER IMAGES</li>
              <li>EXECUTION</li>
              <li>INTERIOR STYLING</li>
              <li>SPACE DECORE</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
