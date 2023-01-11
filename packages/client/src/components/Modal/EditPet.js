import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import { API_URL } from "../../constants";

function EditPet({ onHide, pet, updatePet, ...props}) {
  const [editPet, setEditPet] = useState({});
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
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
  const imageInput = useRef();

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
      const path = await axios.post(`${API_URL}/upload`, formData);
      const response = await axios.patch(`${API_URL}/pets/${pet._id}`, {
        ...formValues,
        image: path.data,
      });
      updatePet(response.data);
      onHide();
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
<>

<Row>
<ToastContainer position='top-end'>
      <Col xs={12}>
        <Toast bg="success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /><small>3 seconds ago</small>
          </Toast.Header>
          <Toast.Body>You successfully updated your pets information.</Toast.Body>
        </Toast>
      </Col>
      </ToastContainer>
    </Row>
    

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
      <form className="modal-form" onSubmit={handleSubmit}>
        <h1>Surrender Pet</h1>
        <label className="formLabels">
          Pet Type:
          <input
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          <input className="form-control" type="file" name="image" multiple required onChange={handleChange} />
        </label>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default EditPet;
