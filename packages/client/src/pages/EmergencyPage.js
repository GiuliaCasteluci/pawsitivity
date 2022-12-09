import React from 'react';
import { useParams } from 'react-router-dom';

function EmergencyPage() {
  const { pet } = useParams();

  return (
    <div>
      <h1>Emergency Page</h1>
      <p>Pet Type: {pet.petType}</p>
      <p>Name: {pet.name}</p>
      <p>Age: {pet.age}</p>
      <p>Sex: {pet.sex}</p>
      <p>
        Image:
        <img src={pet.image} alt={pet.name} />
      </p>
    </div>
  );
}

export default EmergencyPage;