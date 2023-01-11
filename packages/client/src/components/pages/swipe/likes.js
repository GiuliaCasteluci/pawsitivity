import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Toast} from "react-bootstrap";
import paws from './PawsLogo.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { API_URL } from "../../../constants";
import { useProvideAuth } from "../../../hooks/useAuth";

function LikesPage() {
  const [type, setType] = useState(null)
  const [likes, setArray] = useState([])
  const [pets, setPets] = useState([])
    const {
    state: { user },
  } = useProvideAuth()

  useEffect(() => {
    axios.get("http://localhost:3001/api/pets").then((response) => {
      setPets(response.data);
    });
  }, []);

  return (

    <span className="page">
      <ToastContainer></ToastContainer>
      <div className="mt-5">
        <Container className="d-flex flex-wrap">
        {pets.map(pet => (
                <Card  className="d-flex m-auto mt-2 p-2 mb-5" style={{width: '350px'}}>
                  <Card.Img src={pet.image} className="d-block square mt-2" height="500" alt={pet.image} />
                    <Card.Title className="m-auto"><h1>{pet.name}</h1></Card.Title>
                    <Card.Subtitle className="m-auto">Type: {(pet.petType).charAt(0).toUpperCase() + (pet.petType).slice(1)}</Card.Subtitle>
                    <Card.Text className="m-auto">Age: {pet.age}</Card.Text>
                    <Card.Text className="m-auto">Gender: {pet.gender}</Card.Text>
                </Card>
        ))}
        </Container>
        </div>
</span>
)}

export default LikesPage;