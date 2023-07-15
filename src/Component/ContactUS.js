import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container className="contact mt-5">
      <Row className="text-center p-2 mt-5">
        <h6 className="m-2">Get in touch with us</h6>
        <h1>Contact with us</h1>

        <h3 className="m-2">We love to hear from You</h3>
      </Row>

      <Row className="p-2 mt-3">
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <h3>Let's Discuss About Your Spaces! </h3>
          <p>
            A descriptive paragraph that tells clients how good you are and
            proves that you are the best choice that they’ve made.
          </p>
          <p>
            This paragraph is also for those who are looking out for a reliable
            interior design firm. Free Consultation Budget Quotations Latest
            Technologies
          </p>
        </Col>
        <Col className="mr-2" xs={{ span: 12 }} md={{ span: 6 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicname">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicphone">
              <Form.Control type="number" placeholder="Mobile Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicmessage">
              <Form.Control type="text" placeholder="Message" />
            </Form.Group>

            <a href="mailto:bhagyashree096@gmail.com">Click to Send an Email</a>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
