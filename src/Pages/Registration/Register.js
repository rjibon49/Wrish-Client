import React, { useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
  Toast,
} from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const { user, registerUser, isLoding, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password1) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      location,
      history
    );
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={8} className="text-center mt-5 pt-5">
          <h2>Register Here</h2>
          {!isLoding && (
            <form onSubmit={handleLoginSubmit} className="w-75 mx-auto mt-5">
              <FloatingLabel
                controlId="floatingInput"
                name="name"
                label="Full name"
                onChange={handleOnBlur}
                className="mb-3"
                required
              >
                <Form.Control type="text" name="name" placeholder="Full Name" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                name="email"
                label="Email address"
                onChange={handleOnBlur}
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                name="password"
                onChange={handleOnBlur}
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword2"
                label="Confrim Password"
                name="password1"
                onChange={handleOnBlur}
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="password1"
                  placeholder="Confrim Password"
                />
              </FloatingLabel>

              <button className="btn btn-primary w-25 my-2" type="submit">
                Register
              </button>
            </form>
          )}

          {isLoding && <Spinner animation="border" />}
          {user?.email && (
            <Toast className="text-center bg-success text-white mx-auto">
              <Toast.Body>
                <strong>Registration Successfully</strong>
              </Toast.Body>
            </Toast>
          )}
          {authError && (
            <Toast className="text-center bg-danger text-white mx-auto">
              <Toast.Body>
                <strong>Registration Error</strong>
              </Toast.Body>
            </Toast>
          )}

          <p className="mt-5">
            Already Register ? Please Login{" "}
            <Link className="text-decoration-none fw-bold" to="/login">
              Click Here
            </Link>
          </p>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
    </Container>
  );
};

export default Register;
