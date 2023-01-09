import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API_URL from '../../constants'

const PetFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Add this to center the labels */
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
  }
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

      const path = await axios.post(`${API_URL}/upload`, formData);
      console.log(path)
      const response = await axios.post(`${API_URL}/api/pets`, { ...formValues, image: path.data});
  
      setPets([...pets, response.data]);

      navigate('/emergency', { state: { pet: response.data } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PetFormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Surrender Pet</h1>
        <label className="formLabels">
          Pet Type:
          <input
            type="text"
            name="petType"
            required
            value={formValues.petType}
            onChange={handleChange}
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
          />
        </label>

        <label className="formLabels">
          Image:
          <input type="file" name="image" multiple required onChange={handleChange} />
        </label>
        <label className="formLabels">
          <button type="submit">Submit</button>
        </label>
      </form>
    </PetFormContainer>
  );
}

export default PetForm;