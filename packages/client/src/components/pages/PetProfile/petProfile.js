import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import EditPet from "../../Modal/EditPet";

const PetProfile = () => {
  const [pet, setPet] = useState({});
  const [show, setShow] = useState(false);
  const { petId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/pets/${petId}`).then((response) => {
      setPet(response.data);
    });
  }, []);

  const updatePet = (updatedPet) => {
    setPet(updatedPet);
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-evenly m-auto"
      style={{ width: "90vw" }}
    >
      <EditPet
        show={show}
        onHide={() => setShow(false)}
        pet={pet}
        updatePet={updatePet}
      />

      <Card
        style={{
          height: "400px",
          width: "300px",
          marginTop: "100px",
          marginBottom: "10px",
        }}
      >
        <Card.Img
          id="uploaded-image"
          className="my-image"
          variant="top"
          src={`http://localhost:3001/${pet.image}`}
          alt="pet-image"
        />
        <Card.Body className="my-card-body">
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text>
            <ul className="my-list">
              <li>{pet.petType}</li>
              <li>{pet.age}</li>
              <li>{pet.gender}</li>
              <li>{pet.description}</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Button
          style={{ marginBottom: "10px" }}
          variant="primary"
          onClick={() => setShow(true)}
        >
          Edit
        </Button>
      </Card>
    </div>
  );
};

export default PetProfile;
