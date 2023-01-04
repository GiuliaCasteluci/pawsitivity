import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Nav, Navbar, Row, NavDropdown, Card, Toast} from "react-bootstrap";
import paws from './PawsLogo.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function LikesPage() { 

  return (

    <span className="page">
      <ToastContainer></ToastContainer>
      <Navbar className="nav" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={paws}
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav.Link className="ps-5" to='localhost:3000'>Home</Nav.Link>
          <NavDropdown title="Adoption" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Swipe</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Liked Pets
              </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>Surrender</Nav.Link>
          <Nav.Link>Resources</Nav.Link>
        </Container>
      </Navbar>
        <div>

        </div>
    </span>

  );
}

export default LikesPage;