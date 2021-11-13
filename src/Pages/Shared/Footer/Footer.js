import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Footer = () => {

    const { user, logout } = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            WRISH
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/features" className="text-white">Features</Nav.Link>
            {user?.email && <Nav.Link as={Link} to="/dashboardhome" className="text-white">Dashboard</Nav.Link>}

            {
              user.email ? <Nav.Link as={Link} to="/home" className="text-white" onClick={logout}>Logout</Nav.Link> 
            : <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link> 
            }
          </Nav>
        </Container>
      </Navbar>
            <div className="text-center footer bg-dark border border-white border-bottom-0 py-1">
                <p className="text-white"> Design & Develop by 
                <a className="" href="https://www.linkedin.com/in/rayhanhossainjibon/"> Md. Raihan Hossain Jibon</a>
                </p>
            </div>
            
    </>
    );
};

export default Footer;