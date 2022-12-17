import React from "react";
import Header from "../Header";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, CarouselItem, Col, Container , Nav, Navbar, Row, NavDropdown, Card} from "react-bootstrap";
import Logo from "../../Logo";
import paws from './PawsLogo.png'
import heart from './heart.png'
import cancel from './cancel.png'
import glass from './mag.png'


function SwipePage() { 
    const [type, setType] = useState(null)
    const [myArray, setArray] = useState([])
    const [photos, setPhotos] = useState({
      dog: "", 
      adopted: myArray,
      })
    const [skip, setSkip] = useState(5)
 
  
    const addPhoto = () => { 
      const newDog = photos.message
        setArray([...myArray, newDog])
      }
  
    const handleKeyDown = (event) => {
      if(event.key === 'ArrowLeft' || event.target.id === 'next'){
        setType(event)
        setSkip(5)
      } else if(event.key === 'ArrowRight' || event.target.id === 'like'){
        addPhoto()
        setType(event)
        setSkip(5)
      } 
    };
  
  
      useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setPhotos(data))
        .catch(() => console.log("Fetch didn't work!"))
        
      }, [type])
  

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
        <div id="carouselExampleControls" className="carousel position-static mt-5" data-bs-ride="carousel" tabIndex={0} onKeyDown={handleKeyDown}>
        <Container className="card">
          <Row>
            <Col></Col>
            <Col>
              <Card style={{width: '500px'}}>
                <Card.Img src={photos.message} className="d-block square mt-2" height="500" alt={photos.message} />
                  <Card.Title>Mike</Card.Title>
                  <Card.Text>Age: 2 | Weight: 5 | Breed: Good Boy</Card.Text>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row className="text-center text-light mt-4">
          <Col sm='3'></Col>
          <Col><div className="circle mx-auto m-2" ><img src={cancel} id='next'onClick={handleKeyDown} className='circleIcon'/></div></Col>
          <Col><div className="circle mx-auto m-2"><img src={heart} className='circleIcon' id="like" onClick={handleKeyDown}/></div></Col>
          <Col><div className="circle mx-auto m-2" id="seeProfile" onClick={handleKeyDown}><img className='circleIcon' id="seeProfile" onClick={handleKeyDown} src={glass}/></div></Col>
          <Col  sm='3'></Col>
          </Row>
        </Container>
        </div>
        <div>
        </div>
    </span>

  );
}

export default SwipePage;