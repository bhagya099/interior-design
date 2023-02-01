// import { ArrowRight } from "react-bootstrap-icons";
// import IMAGES from "../image/img";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="clr">
      <Container className="mt-1 p-4">
        <Row>
          <Col>
            <h5>Sparkle Design Studio</h5>
          </Col>
          <Col>
            <p>Follow us : Instagram</p>
          </Col>

          <Col>
            <p>Our services</p>
            <ul>
              <li>Space Planning</li>
              <li>Designing</li>
              <li>3D Render Images</li>
              <li>Execution</li>
              <li>Interior Styling</li>
              <li>Space Decore</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
