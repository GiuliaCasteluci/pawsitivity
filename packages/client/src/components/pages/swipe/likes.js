import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Toast} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { API_URL } from "../../../constants";

function LikesPage() {
  const [type, setType] = useState(null)
  const [likes, setArray] = useState([])
  const [pets, setPets] = useState([])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.target.id === 'next') {
      setType(event)
    } else if (event.key === 'ArrowRight' || event.target.id === 'like') {
      setType(event)
    }

  };

  useEffect(() => {
    axios.get(`${API_URL}/api/pets`).then((response) => {
      setPets(response.data);
    });
  }, []);

  return (

    <span className="page">
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
      <div className="mt-5">
        <Container className="d-flex flex-wrap">
        {pets.map(pet => (
                <Card  className="d-flex m-auto mt-5 p-1" style={{width: '500px'}}>
                  <Card.Img src={pet.image} className="d-block square mt-2" height="500" alt={pet.image} />
                    <Card.Title className="m-auto"><h1>{pet.name}</h1></Card.Title>
                    <Card.Subtitle className="m-auto">Type: {(pet.petType).charAt(0).toUpperCase() + (pet.petType).slice(1)}</Card.Subtitle>
                    <Card.Text className="m-auto">Age: {pet.age}</Card.Text>
                    <Card.Text className="m-auto">Gender: {pet.gender}</Card.Text>
                </Card>
        ))}
        </Container>
        </div>
</span>
)}

export default LikesPage;