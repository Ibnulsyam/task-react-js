import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigasi.css";

const Navigasi = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="link">
          <Link to="/">Muhammad Ibnul Syam</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto link ">
            <Nav.Link>
              <Link to="/skills">Skills</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/experience">Experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/portofolio">Portofolio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
