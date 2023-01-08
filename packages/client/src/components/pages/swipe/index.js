import React, {useState} from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Toast} from "react-bootstrap";
import paws from './PawsLogo.png'
import heart from './heart.png'
import cancel from './cancel.png'
import glass from './mag.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LikesPage from "./likes";
import axios from 'axios'

function SwipePage() {       
      const [type, setType] = useState(null)
      const [likes, setArray] = useState([])
      const [pets, setPets] = useState([])
        
        const handleKeyDown = (event) => {
          if(event.key === 'ArrowLeft' || event.target.id === 'next'){
            setType(event)
          } else if(event.key === 'ArrowRight' || event.target.id === 'like'){
            setType(event)
          } 
          
        };
    
        useEffect(() => {
          axios.get("http://localhost:3001/api/pets").then((response) => {
            setPets(response.data);
          });
        }, []);    
  
        
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
          <Nav.Link className="ps-5" href='/'>Home</Nav.Link>
          <NavDropdown title="Adoption" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/adopt">Swipe</NavDropdown.Item>
              <NavDropdown.Item href="/likes">
                Liked Pets ({likes.length})
              </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/petForm">Surrender</Nav.Link>
          <Nav.Link href="">Resources</Nav.Link>
        </Container>
      </Navbar>
        <Container>
          {pets.map(pet => (
              <Card  className="m-auto mt-5" style={{width: '500px'}}>
                <Card.Img src={pet.message} className="d-block square mt-2" height="500" alt={pet.message} />
                  <Card.Title>{pet.message}</Card.Title>
                  <Card.Text>Age: 2 | Weight: 5 | Breed: Good Boy</Card.Text>
                  <div className="d-flex flex-column">
                    <img src={cancel} id='next'onClick={handleKeyDown} className='circleIcon'/>
                    <img className='circleIcon' id="seeProfile" onClick={handleKeyDown} src={glass}/>
                  </div>
              </Card>
            ))}
        </Container>
    </span>

  );
}

export default SwipePage;