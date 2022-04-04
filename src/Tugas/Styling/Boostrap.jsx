import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "./boostrap.css";
import { Button, Row, Col } from "react-bootstrap";

class Boostrap extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#Ibnul">Muhammad Ibnul Syam</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#bio">Biografi</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="jumbotron">
          <div className="container-jmb">
            <p className="job mt-5">Web Depelover</p>
            <h1 className="nama ">Muhammad Ibnul Syam</h1>
            <Button
              bg="dark"
              variant="dark"
              className="mt-5"
              href="https://www.linkedin.com/in/muh-ibnul-syam-a12701234/"
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="container text-center" id="bio">
          <h3 className="fs-bold fs-2 mt-5">My Bio</h3>
          <p className="fs-6 fst-italic fw-light">
            Halo perkenalkan nama saya Muhammad Ibnul Syam, biasa di panggil
            Ibnul. Saat ini saya sedang mengikuti program ISA di Eduwork,
            sebelum saya belajar tentang program saya dulunya seorang pekerja di
            hotel Jw Marriot.
          </p>
        </div>
        <Container>
          <Row>
            <Col>
              <h3 className="text-center">Skills</h3>
              <div className="skill text-center">
                <p>HTML</p>
                <p>CSS</p>
                <p>Java Script</p>
                <p>PHP</p>
              </div>
            </Col>
            <Col>
              <h3 className="text-center">Other Skills</h3>
              <div className=" other-skill text-center">
                <p>Speaking English</p>
                <p>Manage Time</p>
                <p>Solve Problem</p>
                <p>Team Work</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Form className="form mb-4">
          <div className="contact text-center" id="contact">
            <h3>My Contact</h3>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button className="btn" variant="secondary" size="lg">
              Submit
            </Button>
          </div>
        </Form>
        <div className="container-fluid background mb-0">
          <footer>
            <p className=" text-center footer">
              &copy; 2022 Ibnul Syam, Inc. All rights reserve
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Boostrap;
