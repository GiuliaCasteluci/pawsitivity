import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";

const PetFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 100vh;
  .formLabels {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

function PetForm() {
  const [formValues, setFormValues] = useState({
    petType: "",
    name: "",
    age: "",
    gender: "",
    description: "",
    image: '',
  });
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);


  function handleChange(event) {
    const { name, value, files } = event.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  }

  async function handleSubmit(event) {
    console.log("hello?")
    event.preventDefault();
    try {
      const formData = new FormData()
      formData.append("image", formValues.image)
      console.log("How about now?")

      const path = await axios.post("http://localhost:3001/upload", formData);
      console.log(path)
      const response = await axios.post('http://localhost:3001/api/pets', { ...formValues, image: path.data});
  
      setPets([...pets, response.data]);

      navigate('/emergency', { state: { pet: response.data } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PetFormContainer>
      <div>
      <h2 className="petFormH2">Surrender Pet</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="formLabels">
          Pet Type:
          <input
            type="text"
            name="petType"
            required
            value={formValues.petType}
            onChange={handleChange}
            placeholder='Dog, Cat, etc.'
          />
        </label>
        <label className="formLabels">
          Name:
          <input
            type="text"
            name="name"
            required
            value={formValues.name}
            onChange={handleChange}
            placeholder='Name of pet'
          />
        </label>
        <label className="formLabels">
          Age:
          <input
            type="text"
            name="age"
            required
            value={formValues.age}
            onChange={handleChange}
            placeholder='Age of pet'
          />
        </label>
        <label className="formLabels">
          Gender:
          <input
            type="text"
            name="gender"
            required
            value={formValues.gender}
            onChange={handleChange}
            placeholder='Pets gender'
          />
        </label>

        <label className="formLabels">
          Description:
          <input
            type="text"
            name="description"
            required
            value={formValues.description}
            onChange={handleChange}
            placeholder='Reason for surrendering pet'
          />
        </label>

        <label className="formLabels">
          Image:
          <input type="file" name="image" multiple required onChange={handleChange} />
        </label>
        <label className="formLabels">
          <button className="petFormButton" type="submit">Submit</button>
        </label>
      </form>
      
    </PetFormContainer>
  );
}

export default PetForm;