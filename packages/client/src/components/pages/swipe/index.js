import React, {useState} from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Toast, Button} from "react-bootstrap";
import paws from './PawsLogo.png'
import heart from './heart.png'
import cancel from './cancel.png'
import glass from './mag.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LikesPage from "./likes";
import axios from 'axios'
import { Carousel } from "react-bootstrap";

function SwipePage() {       
      const [type, setType] = useState(null)
      const [likes, setArray] = useState([])
      const [pets, setPets] = useState([])
      const [current, setCurrent] = useState('')
      
        const handleKeyDown = (event) => {
          if(event.key === 'ArrowLeft' || event.target.id === 'next'){
            setType(event)
            setPets(pets.filter(pet => pet._id !== event.target.name))
            console.log(event.target.id)
            toast.error(`${event.target.name} was disliked`)
            // setPets(pets.filter(pet => pet._id !== ))
          } else if(event.key === 'ArrowRight' || event.target.id === 'like'){
            setType(event)
            setPets(pets.filter(pet => pet._id !== event.target.name))
            console.log(pets)
            toast.success(`${event.target.name} was added to likes`)
          } 
          
        };
    
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
        <Container>
            {
            pets.length >= 1 ? 
            <Carousel
            interval={null} 
            indicators=''
            >
            {pets.map(pet => {
              return (
              <Carousel.Item >
                <Card className="d-flex m-auto mt-5 p-3" style={{width: '50vw'}}>
                  <Card.Img src={pet.image} className="d-block square mt-2" height="500" alt={pet.image} />
                    <Card.Title className="m-auto"><h1>{pet.name}</h1></Card.Title>
                    <Card.Subtitle className="m-auto">Type: {(pet.petType).charAt(0).toUpperCase() + (pet.petType).slice(1)}</Card.Subtitle>
                    <Card.Text className="m-auto">Age: {pet.age}</Card.Text>
                    <Card.Text className="m-auto">Gender: {pet.gender}</Card.Text>
                    <div className="d-flex flex-row justify-content-evenly m-2">
                      <img className='circleIcon' id='next' data-slide="next" onClick={handleKeyDown} name={pet._id} src={cancel}/>
                      <img className='circleIcon' id="like" data-slide="next" onClick={handleKeyDown} name={pet._id} src={heart}/>
                      <img className='circleIcon' id="seeProfile" onClick={handleKeyDown} alt='See' src={glass}/>
                    </div>
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