// import { ArrowRight } from "react-bootstrap-icons";
// import IMAGES from "../image/img";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="mt-1 p-4 text-center footer-background">
      <Row>
        <Col md={{ span: 3 }}>
          <h5>Sparkle Design Studio</h5>
        </Col>
        <Col md={{ span: 3 }}>
          <p>Follow us : Instagram</p>
        </Col>

        <Col md={{ span: 6 }}>
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
  );
};

export default Footer;
