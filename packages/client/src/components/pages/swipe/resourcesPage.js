import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, Card } from "react-bootstrap";
import paws from "./PawsLogo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResourcePage() {
  return (
    <span className="page">
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
                <Nav.Link className="ps-5" href='/'>Home</Nav.Link>
                <NavDropdown title="Adoption" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/adopt">Swipe</NavDropdown.Item>
                    <NavDropdown.Item href="/likes">
                    Liked Pets
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/petForm">Surrender</Nav.Link>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/resources">Pet Resources</NavDropdown.Item>
                    <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
        <Container className="mt-5 m-auto">
            <Card className="m-auto">
                <Card.Title className="m-auto">Title</Card.Title>
            </Card>
        </Container>
      <ToastContainer></ToastContainer>
      <Navbar className="nav" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={paws}
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav.Link className="ps-5" href="/">
            Home
          </Nav.Link>
          <NavDropdown title="Adoption" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/adopt">Swipe</NavDropdown.Item>
            <NavDropdown.Item href="/likes">Liked Pets</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/petForm">Surrender</Nav.Link>
          <NavDropdown title="Resources" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/resources">Pet Resources</NavDropdown.Item>
            <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <div className="mt-5 bg-light m-auto">
        <Card className="d-flex flex-row">
          <Card.Title>Me</Card.Title>
          <Card.Text>Me Details</Card.Text>
        </Card>
        <Card className="d-flex flex-row">
          <Card.Title>Me</Card.Title>
          <Card.Text>Me Details</Card.Text>
        </Card>
      </div>
    </span>
  );
}

export default ResourcePage;
