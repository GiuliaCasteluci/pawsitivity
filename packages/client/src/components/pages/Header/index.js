import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
// import HeaderIcons from '../HeaderIcons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HeaderContainer = styled.header`
image.png

`

function Header() {
    return (
       <HeaderContainer>
             <Logo />
            {/* <HeaderOptions />
            <Link to="/login">&nbsp;Sign In</Link>
        <Link to='/petForm'>&nbsp;Pet Form</Link>
        <Link to='/emergency'>&nbsp;Emergency</Link>  */}

        <>
      <Navbar bg="light" variant="light">
        <Container>
        {/* <Navbar.Brand href="#home">
            <img
              src={<Logo/>}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> */}
          <Navbar.Brand as={Link} to="/home">Pawsitivity</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/petForm">Pet Form</Nav.Link>
            <Nav.Link as={Link} to="/emergency">Emergency</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>


       </HeaderContainer>
    )
}

export default Header;



