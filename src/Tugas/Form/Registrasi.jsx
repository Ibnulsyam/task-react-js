import React, { Component } from "react";
import styled from "styled-components";
import * as Validator from "validatorjs";
import Swal from "sweetalert2";

const Container = styled.div`
  width: 400px;
  margin: 50px auto;
  padding: 20px;
`;

const Button = styled.button`
  width: 178px;
`;

class Registrasi extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errors: [],
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConPassword = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;

    let data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    let rules = {
      email: "required|email",
      password: "required|min:8",
      confirmPassword: "required|min:8",
    };

    let validation = new Validator(data, rules);
    validation.passes();
    this.setState({
      errors: [
        ...validation.errors.get("email"),
        ...validation.errors.get("password"),
        ...validation.errors.get("confirmPassword"),
      ],
    });

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errors: ["Password must be same ConfirmPassword"],
      });
    }

    if (
      this.state.errors.length === 0 &&
      this.state.email.length > 0 &&
      this.state.password.length >= 8 &&
      this.state.password === this.state.confirmPassword
    ) {
      Swal.fire(
        `
          Email: ${this.state.email}
          Password: ${this.state.password}
          Confirm Password: ${this.state.confirmPassword}`
      );

      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  render() {
    return (
      <Container>
        <h1>Registrasi Page</h1>
        <ul style={{ color: "red", fontStyle: "italic" }}>
          {this.state.errors.map((data, k) => (
            <li key={k}>{data}</li>
          ))}
        </ul>
        <form>
          <table>
            <tr>
              <td>
                <label htmlFor="email">Email :</label>
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password :</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="conPassword">Confirm Password :</label>
              </td>
              <td>
                <input
                  type="password"
                  name="conPassword"
                  id="conPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleConPassword}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="center">
                <Button type="submit" name="submit" onClick={this.handleSubmit}>
                  Registrasi
                </Button>
              </td>
            </tr>
          </table>
        </form>
      </Container>
    );
  }
}

export default Registrasi;
