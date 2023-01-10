import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavDropdown} from 'react-bootstrap' 
import { useProvideAuth } from "../../../hooks/useAuth";

const HeaderContainer = styled.header`
image.png
`;

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
              <NavDropdown title="Adoption" id="navbarScrollingDropdown">
              <Nav.Link className="text-center" as={Link} to="/petForm">
                Surrender
              </Nav.Link>
              <NavDropdown.Item className="text-center" href="/adopt">
                Pet Tinder
              </NavDropdown.Item>
              <Nav.Link className="text-center" as={Link} to="/emergency">Available Pets</Nav.Link>
              <NavDropdown.Item className="text-center" href="/likes">
                Liked Pets
              </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item className="text-center" href="/">Pet Assistance</NavDropdown.Item>
              <NavDropdown.Item className="text-center" href="/aboutUs">About Us</NavDropdown.Item>
          </NavDropdown>
            </Nav>
            <Nav.Link variant="outline-info" onClick={() => signout()}>
              Sign Out
            </Nav.Link>
          </Container>
        </Navbar>
      </>
    </HeaderContainer>
  );
}

export default Header;
