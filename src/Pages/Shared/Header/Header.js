import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" className="py-2">
        <Container>
          <Navbar.Brand as={Link} to="/">
            WRISH
          </Navbar.Brand>

          <Nav className="ms-auto me-5">
            <Nav.Link as={Link} to="/features" className="text-white">Features</Nav.Link>
            {user?.email && <Nav.Link as={Link} to="/dashboardhome" className="text-white">Dashboard</Nav.Link>}

            {
              user.email ? <NavDropdown title="Profile" id="basic-nav-dropdown" style={{color:"white"}}>
              <Nav className="flex-column text-center">
                  <span><small>Welcome</small></span>
                  <span className="fw-bold">{user.displayName}</span>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/home" onClick={logout}>Logout</NavDropdown.Item>
            </Nav>
          </NavDropdown>
            : <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link> 
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
