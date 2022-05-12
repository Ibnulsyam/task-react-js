import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const ConContact = styled.div`
  margin: 10px auto;
  width: 80%;
  height: 400px;
  background-color: #1a1c1a;
  border-radius: 20px;
  margin-top: 50px;
`;

const ConMain = styled.div`
  width: 60%;
  height: auto;
  margin: 10px auto;
  padding-top: 20px;
`;

const Contact = () => {
  return (
    <ConContact>
      <ConMain>
        <Form className="container-fluid text-white">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <div className="d-grid gap-2 container-fluid mt-4">
          <button className="btn btn-dark " type="button">
            Button
          </button>
        </div>
      </ConMain>
    </ConContact>
  );
};

export default Contact;
