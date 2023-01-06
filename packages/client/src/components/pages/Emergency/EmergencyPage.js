import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

import { Container, Card, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const PetDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;


function EmergencyPage() {
  const [pets, setPets] = useState([]);
  const location = useLocation();
  const { pet } = location.state;

  useEffect(() => {
    // add the new pet to the list of pets
    setPets([...pets, pet]);
  }, [pet]);

  // function navigateToProfilePage(name) {
  //   const navigate = useNavigate();
  //   navigate(`/pets/${name}`); // navigate to the pet's profile page
  // }

  // onClick={() => navigateToProfilePage(name)}
  

  return (
    <PetDataContainer>
      <Header />

      <div>
        <h1>Emergency Page</h1>
        <Link to="/petform" className="btn btn-primary">
          Add another pet
        </Link>
        {pets.map(({ petType, name, age, gender, image }) => (
          <div key={name}>
            <div className="app">
              <Container className="p-4">
                <Col md="4" className="mx-auto">
                  <Card>
                    <Card.Img
                      className="my-image"
                      variant="top"
                      src={URL.createObjectURL(image)}
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
