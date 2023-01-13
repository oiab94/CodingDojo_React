import { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class FormHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email:"",
      password: "",
      confirmPass: "",
    };
  }

  setFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  setLastName = (e) => {
    this.setState({ lastName:e.target.value });
  };

  setEmail = (e) => {
    this.setState({ email: e.target.value});
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  setConfirmPass = (e) => {
    this.setState({ confirmPass: e.target.value });
  }

  FirstName = (props) => {
    return (
      <div>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            First Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            name="firstName"
            onChange={this.setFirstName}
          />
        </InputGroup>
      </div>
    );
  };

  LastName = (props) => {
    return (
      <div>
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Last Name</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="lastName"
              onChange={this.setLastName}
              />
        </InputGroup>
      </div>
    );
  };

  Email = (props) => {
    return (
      <div>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Email
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            name="email"
            onChange={this.setEmail}
          />
        </InputGroup>
      </div>
    );
  };

  Password = (props) => {
    return (
      <div>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Password
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="password"
            name="email"
            onChange={this.setPassword}
          />
        </InputGroup>
      </div>
    );
  };

  confirmPassword = (props) => {
    return (
      <div>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Confirm Password
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="password"
            name="email"
            onChange={this.setConfirmPass}
          />
        </InputGroup>
      </div>
    );
  };

  FormData = () => {
    return (
      <div>
        <p className="text-center">Your Form Data</p>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <p>Confirm Password: {this.state.confirmPass}</p>
      </div>
    );
  };

  render = () => {
    return (
      <Container>
        <br />
        <Col md={{ span: 6, offset: 3 }}>
          <this.FirstName /> <br />
          <this.LastName /> <br />
          <this.Email /> <br />
          <this.Password /> <br />
          <this.confirmPassword />
        </Col>
        <Col md={{ span: 6, offset: 3 }}>
          <this.FormData />
        </Col>
      </Container>
    );
  };
}
