import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const PetProfile = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/pets/${petId}`).then((response) => {
      setPet(response.data);
    });
  }, []);


  return (

    <div className="pet-profile">
      <h1>Pet Profile</h1>
      <h2>{pet.name}</h2>
      <h2>{pet.petType}</h2>
      <h2>{pet.age}</h2>
      <h2>{pet.description}</h2>
      <h2>
        {pet ? (
          <img className="pet-profile-img" src={`http://localhost:3001/${pet.image}`} alt="pet" />
        ) : null}
      </h2>
    </div>

  );
};

export default PetProfile;
