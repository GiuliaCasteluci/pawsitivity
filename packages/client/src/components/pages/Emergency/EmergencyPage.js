import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Container, Card, Col, Button, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const EmergencyPage = ({ pets }) => {
  const [localPets, setLocalPets] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get("http://localhost:3001/api/pets").then((response) => {
      setLocalPets(response.data);
    });
  }, []);


  return (

      <div>
    <h1 className="emergency-page-h2">Emergency Page</h1>
    <Link to="/petform" className="btn btn-primary return-petform">
      Add another pet
    </Link>
    <div className="d-flex flex-wrap justify-content-evenly m-auto" style={{width: '90vw'}}  >
      {localPets.map(({ petType, name, age, gender, image, _id }) => (
        //  key={_id}>
          <Card style={{height: '400px', width: '300px'}}>
            <Card.Img
              id="uploaded-image"
              className="my-image"
              variant="top"
              src={`http://localhost:3001/${image}`}
              alt="pet-image"
            />
            <Card.Body className="my-card-body">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <ul className="my-list">
                  <li>{petType}</li>
                  <li>{age}</li>
                  <li>{gender}</li>
                </ul>
                <Link to={`/pets/${_id}`}>
                  <Button variant="primary">See profile</Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        
      ))}
      </div>
  </div>


  );
};

export default EmergencyPage;


