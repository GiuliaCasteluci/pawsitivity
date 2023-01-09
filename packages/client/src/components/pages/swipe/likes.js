import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Toast} from "react-bootstrap";
import paws from './PawsLogo.png'
import heart from './heart.png'
import cancel from './cancel.png'
import glass from './mag.png'
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
        <div>
          <Container>
            <Row>
              <Col className="bg-light">
                <Card.Img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU'} className="d-block square m-4" height="300" alt='' />
              </Col>
              <Col sm='8' className="bg-light">
                <Card.Text className="m-5 text-primary"><h1 className="m-5 text-primary">Kyle</h1></Card.Text>
                <Card.Body className="text-primary text-center">
                  <h3>Gender</h3>
                  <p>Male</p>

                  <h3>Age</h3>
                  <p>2 Years</p>

                  <h3>Details</h3>
                  <p>Requires lots of love and attention</p>
                </Card.Body>
              </Col>
            </Row>

            <Row>
              <Col className="bg-light">
                <Card.Img src='' className="d-block square m-4" height="300" alt='' />
              </Col>
              <Col sm='8' className="bg-light">
                <Card.Text className="m-5"><h1 className="m-5 text-primary">Rodney</h1></Card.Text>
                <Card.Body className="text-primary text-center">
                  <h3>Gender</h3>
                  <p>Male</p>

                  <h3>Age</h3>
                  <p>4 Years</p>

                  <h3>Details</h3>
                  <p>Really good with small children</p>
                </Card.Body>
              </Col>
            </Row>

            <Row>
              <Col className="bg-light">
                <Card.Img src={'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg'} className="d-block square m-4" height="300" alt='' />
              </Col>
              <Col sm='8' className="bg-light">
                <Card.Text className="m-5"><h1 className="m-5 text-primary">Zach</h1></Card.Text>
                <Card.Body className="text-primary text-center">
                  <h3>Gender</h3>
                  <p>Male</p>

                  <h3>Age</h3>
                  <p>1 Year</p>

                  <h3>Details</h3>
                  <p>(No details provided by owner)</p>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </span>
  );
}

export default LikesPage;