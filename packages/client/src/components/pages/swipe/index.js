import React, {useState} from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Button, Modal} from "react-bootstrap";
import paws from './PawsLogo.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LikesPage from "./likes";
import axios from 'axios'
import { Carousel } from "react-bootstrap";

function SwipePage() {       
      const [type, setType] = useState(null)
      const [likes, setArray] = useState([])
      const [pets, setPets] = useState([])
    
      useEffect(() => {
        axios.get("http://localhost:3001/api/pets").then((response) => {
          setPets(response.data);
        });
      }, []);      
  return (

    <span className="page ">
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
        <Container>
            {
            pets.length >= 2 ? 
            <Carousel
            interval={null} 
            indicators=''
            slide={false}
            onSlid={(index, direction)=> {
              if(direction === 'start' && index === 0){
                setPets(pets.filter(pet => pet._id !== pets[pets.length-1]._id))
                toast.success(`${pets[pets.length-1].name} was added to likes`)
              } else if(direction === 'end' && index === (pets.length-1)){
                console.log(0)
                setPets(pets.filter(pet => pet._id !== pets[0]._id))
                toast.error(`${pets[0].name} was disliked`)
              } else if(direction === 'start'){
                setPets(pets.filter(pet => pet._id !== pets[index-1]._id))
                toast.success(`${pets[index-1].name} was added to likes`)
              } else if(direction === 'end'){
                console.log((index + 1))
                setPets(pets.filter(pet => pet._id !== pets[index+1]._id))
                toast.error(`${pets[index+1].name} was disliked`)
              }
            }}
>
            {pets.map(pet => {
              return (
              <Carousel.Item >
                <Card className="d-flex m-auto mt-5 p-3" style={{width: '50vw'}}>
                  <Card.Img src={pet.image} className="d-block square mt-2" height="500" alt={pets.indexOf(pet)} />                  
                    <Card.Title className="m-auto d-flex">
                      <h1>{pet.name}</h1>
                    </Card.Title>
                    <Card.Subtitle className="m-auto">Type: {(pet.petType).charAt(0).toUpperCase() + (pet.petType).slice(1)}</Card.Subtitle>
                    <Card.Text className="m-auto">Age: {pet.age}</Card.Text>
                    <Card.Text className="m-auto">Gender: {pet.gender}</Card.Text>
                </Card>
                </Carousel.Item>
            )})}
            </Carousel>

            : 
            <Card className="d-flex m-auto mt-5 p-3" style={{width: '50vw'}}>
                    <Card.Title className="m-auto mt-5"><h1>More Pets Coming Soon!!</h1></Card.Title>
                    <Card.Subtitle className="m-auto">COME BACK SOON</Card.Subtitle>
                </Card>
            }
        </Container>
    </span>

  );
}

export default SwipePage;