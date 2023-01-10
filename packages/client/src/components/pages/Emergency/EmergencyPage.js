import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteImg from "../../../images/delete.png";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./style.css";
import { API_URL } from "../../../constants";

const EmergencyPage = ({ pet }) => {
  const [localPets, setLocalPets] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/pets`).then((response) => {
      setLocalPets(response.data);
    });
  }, []);

  const handleDelete = (petId) => {
    axios.delete(`${API_URL}/pets/${petId}`).then(() => {
      setLocalPets(localPets.filter((pet) => pet._id !== petId));
    });
  };

  return (
    <div>
      <h1 className="emergency-page-h2">Emergency Page</h1>
      <Link to="/petform" className="btn btn-primary return-petform">
        Add another pet
      </Link>
      <div
        className="d-flex flex-wrap justify-content-evenly m-auto"
        style={{ width: "90vw" }}
      >
        {localPets.map(({ petType, name, age, gender, image, _id }) => (
          <Card
            style={{ height: "400px", width: "300px", marginBottom: "40px" }}
          >
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
                  {/* <Button class="btn2" type="submit">
                    See Profile
                  </Button> */}
                </Link>
                <Button
                  variant="primary"
                  onClick={() => handleDelete(_id)}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img src={deleteImg} alt="Delete icon" />
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyPage;
