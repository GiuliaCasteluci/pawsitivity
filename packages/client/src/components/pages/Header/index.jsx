import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavDropdown} from 'react-bootstrap' 
import { useProvideAuth } from "../../../hooks/useAuth";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Header() {
  const {
    state: { user },
    signout,
  } = useProvideAuth();

  if (!user) {
    return (
        <Navbar expand='md'  className="p-3" variant="dark">
          <Container>
            <Navbar.Brand as={Link} style={{fontSize: 'xx-large'}} to="/homePage">
              Pawsitivity
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
             
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
  return (
        <Navbar expand='md'  className="p-3" variant="dark">
          <Container>
            <Navbar.Brand as={Link} style={{fontSize: 'xx-large'}} to="/homePage">
              Pawsitivity
            </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">  
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/petForm">
                  Surrender
                </Nav.Link>
                <NavDropdown title="Adoption" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} className="text-center" to="/adopt">
                  Pet Tinder
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} className="text-center" to="/emergency">Available Pets</NavDropdown.Item>
                <NavDropdown.Item as={Link} className="text-center" to="/likes">
                  Liked Pets
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} className="text-center" to="/resources">Pet Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} className="text-center" to="/aboutUs">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} className="text-center" to="/Chat">Chat</NavDropdown.Item>
            </NavDropdown>
              </Nav>
              <Nav.Link variant="outline-info" className="" onClick={() => signout()}>
                Sign Out
              </Nav.Link>
              </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default Header;
