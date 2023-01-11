import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavDropdown} from 'react-bootstrap' 
import { useProvideAuth } from "../../../hooks/useAuth";

const HeaderContainer = styled.header``;

function Header() {
  const {
    state: { user },
    signout,
  } = useProvideAuth();

  if (!user) {
    return (
      <HeaderContainer>
        <>
        <Navbar>
          <Container>
            <Navbar.Brand as={Link} to="/homePage">
              Pawsitivity
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
             
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
        <Navbar className="p-3">
            <Navbar.Brand as={Link} to="/homePage">
              Pawsitivity
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} className="text-center" to="/petForm">
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
          </NavDropdown>
            </Nav>
            <Nav.Link variant="outline-info" onClick={() => signout()}>
              Sign Out
            </Nav.Link>
        </Navbar>
    </HeaderContainer>
  );
}

export default Header;
