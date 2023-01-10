import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../constants";

function EditPet({ onHide, pet, updatePet, ...props }) {
  const [formValues, setFormValues] = useState({
    petType: "",
    name: "",
    age: "",
    gender: "",
    description: "",
    image: "",
  });
  const nameInput = useRef();
  const petTypeInput = useRef();
  const ageInput = useRef();
  const genderInput = useRef();
  const descriptionInput = useRef();

  function handleChange(event) {
    const { name, value, files } = event.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", formValues.image);
      const path = await axios.post(`${API_URL}/upload"`, formData);
      const response = await axios.patch(`${API_URL}/pets/${pet._id}`, {
        ...formValues,
        image: path.data,
      });
      updatePet(response.data);
      onHide();
      toast.success("New pet information saved!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Pet Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <h1>Surrender Pet</h1>
            <label className="formLabels">
              Pet Type:
              <input
                type="text"
                name="petType"
                required
                ref={petTypeInput}
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
                ref={nameInput}
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
                ref={ageInput}
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
                ref={genderInput}
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
                ref={descriptionInput}
                value={formValues.description}
                onChange={handleChange}
              />
            </label>
            <label className="formLabels">
              Image:
              <input
                type="file"
                name="image"
                multiple
                required
                onChange={handleChange}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default EditPet;
