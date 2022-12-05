import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Details() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">Sparkel Design Studio</Navbar.Brand>
      <Navbar.Toggle aria-controls="justify-content-end" />
      <Navbar.Collapse id="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
