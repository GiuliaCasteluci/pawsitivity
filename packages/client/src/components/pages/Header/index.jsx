import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
              <Nav.Link as={Link} to="/petForm">
                Emergency Surrender
              </Nav.Link>
              <Nav.Link as={Link} to="/emergency">
                Available Pets
              </Nav.Link>
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
