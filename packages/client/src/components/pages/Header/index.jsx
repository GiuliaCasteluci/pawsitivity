import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderContainer = styled.header`
image.png
`;

function Header() {
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
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/petForm">
                Surrender
              </Nav.Link>
              <Nav.Link as={Link} to="/emergency">
                Emergency
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </HeaderContainer>
  );
}

export default Header;
