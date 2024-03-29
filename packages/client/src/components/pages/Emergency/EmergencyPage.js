import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteImg from "../../../images/delete.png";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { API_URL } from "../../../constants";
import { useProvideAuth } from "../../../hooks/useAuth";
import { useRequireAuth } from "../../../hooks/useRequireAuth";

const EmergencyPage = ({ pet }) => {
  const [localPets, setLocalPets] = useState([]);
  const { state } = useProvideAuth();

  const {
    state: { isAuthenticated },
  } = useRequireAuth();

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
              src={`44.203.184.240/${image}`}
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
                  <Button class="btn2" type="submit">
                    See Profile
                  </Button>
                </Link>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ background: "transparent", border: "none" }}
                    id="dropdown-basic"
                  >
                    <img
                      style={{ marginLeft: "15px" }}
                      src={deleteImg}
                      alt="Delete icon"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleDelete(_id)}>
                      Delete Pet
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyPage;
