import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";

import { Container, Card, Col, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



const PetDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function EmergencyPage() {
  const [pets, setPets] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get("http://localhost:3001/api/pets")
      .then(response => {
        setPets(response.data)
      })
  }, []);


  return (
    <PetDataContainer>
      <div>
        <h1>Emergency Page</h1>
        <Link to="/petform" className="btn btn-primary">
          Add another pet
        </Link>
        {pets.map(({ petType, name, age, gender, image }) => (
          <div key={name}>
            <div className="app">
              <Container className="pet-card">
                <Col md="4" className="mx-auto">
                  <Card>
                    <Card.Img
                      id='uploaded-image'
                      className="my-image"
                      variant="top"
                      src={`http://localhost:3001/${image}`} alt="pet-image"
                    />
                    <Card.Body className="my-card-body">
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>
                        <ul className="my-list">
                          <li>{petType}</li>
                          <li>{age}</li>
                          <li>{gender}</li>
                        </ul>
                        <Button variant="primary" >See profile</Button>
                      </Card.Text>
                    </Card.Body>

                  </Card>
                </Col>
              </Container>
            </div>
          </div>
        ))}
      </div>
    </PetDataContainer>
  );
}

export default EmergencyPage;