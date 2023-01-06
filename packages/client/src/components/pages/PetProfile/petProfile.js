import React from 'react';

const PetProfile = ({ pet }) => {
  return (
    <div>
      <img src={pet.image} alt={pet.name} />
      <h1>{pet.name}</h1>
      <p>{pet.age}</p>
      <p>{pet.gender}</p>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetProfile;