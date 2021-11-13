import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Spinner, Toast } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const {user, loginUser, isLoding, authError} = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={8} className="text-center mt-5 pt-5">
          <h2>Login Here</h2>
          {!isLoding && <form onSubmit={handleLoginSubmit} className="w-75 mx-auto mt-5">
            <FloatingLabel
              controlId="floatingInput"
              name="email"
              label="Email address"
              onChange={handleOnBlur}
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              name="password"
              onChange={handleOnBlur}
              className="mb-3"
            >
              <Form.Control type="password" name="password" placeholder="Password" />
            </FloatingLabel>
            <button className="btn btn-primary w-25 mt-2" type="submit">
              Login
            </button>
          </form>}

          {isLoding && <Spinner animation="border" />}
          {
              user?.email && <Toast className="text-center bg-success text-white mx-auto">
              <Toast.Body><strong>Registration Successfully</strong></Toast.Body>
            </Toast>
          }
          {
              authError && <Toast className="text-center bg-danger text-white mx-auto" >
              <Toast.Body><strong>Registration Error</strong></Toast.Body>
            </Toast>
          }

          <p className="mt-5">
            New User ? Please Registration{" "}
            <Link className="text-decoration-none fw-bold" to="/register">
              Click Here
            </Link>
          </p>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
    </Container>
  );
};

export default Login;
